import models, { sequelize } from "../../../models";
import plaid from "plaid";
import Stripe from "stripe";
import config from "../../config/settings";
import InvoiceService from '../Invoice';
import OrderService from '../Order';
import moment from "moment";
const stripe = Stripe(config.stripe.secretKey);

const plaidClient = new plaid.Client(
  config.plaid.clientId,
  config.plaid.secret,
  config.plaid.publicKey,
  plaid.environments[config.plaid.env],
  {
    version: "2019-05-29",
    clientApp: "plastplace"
  }
);

async function getUserPaymentModel(UserId) {
  try {
    let upm = await models.UserPaymentMethod.findOne({
      where: {
        UserId
      }
    });

    if (upm) return upm;
    let user = await models.User.findByPk(UserId);
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.first_name + " " + user.last_name
    });
    upm = await models.UserPaymentMethod.create({
      UserId,
      stripeCustomerId: customer.id
    });
    return upm;
  } catch (e) {
    throw e;
  }
}

async function addACHTransfer(UserId, feeds) {
  try {
    let upm = await getUserPaymentModel(UserId);

    const plaidToken = await plaidClient.exchangePublicToken(
      feeds.public_token
    );
    const accessToken = plaidToken.access_token;
    const stripeToken = await plaidClient.createStripeToken(
      accessToken,
      feeds.account_id
    );
    const bankAccountToken = stripeToken.stripe_bank_account_token;
    if (upm.bank) {
      await stripe.customers.deleteSource(upm.stripeCustomerId, upm.bank);
    }
    const bank = await stripe.customers.createSource(upm.stripeCustomerId, {
      source: bankAccountToken
    });
    await upm.update({ bank: bank.id });
    return;
  } catch (e) {
    throw e;
  }
}

async function addSEPA(UserId, feeds) {
  try {
    const upm = await getUserPaymentModel(UserId);
    if (upm.sepa) await stripe.paymentMethods.detach(upm.card);

    await stripe.paymentMethods.attach(feeds.payment_method, {
      customer: upm.stripeCustomerId
    });
    upm.update({
      card: feeds.payment_method
    });
    return;
  } catch (e) {
    throw e;
  }
}

async function addCard(UserId, feeds) {
  try {
    console.log(feeds);
    const upm = await getUserPaymentModel(UserId);
    if (upm.card) await stripe.paymentMethods.detach(upm.card);

    await stripe.paymentMethods.attach(feeds.payment_method, {
      customer: upm.stripeCustomerId
    });
    upm.update({
      card: feeds.payment_method
    });
    return;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function calculateFee(ListingId) {
  console.log(ListingId);
  const listing = await models.Listing.findByPk(ListingId, {
    include: [
      {
        model: models.Country,
        include: [{ model: models.Currency }]
      }
    ]
  });
  const amount = listing.quantity * listing.pricePerUnit * 0.03;
  const currency = listing.Country.Currency.code;
  return {
    amount,
    currency
  };
}

async function paymentProcess(feeds) {
  try {
    const listing = await models.Listing.findByPk(feeds.ListingId);

    const order = await models.Order.create({
      BuyerId: feeds.UserId,
      SellerId: listing.UserId,
      ListingId: feeds.ListingId,
      status: "Active"
    });
    const now = moment(new Date()).format("YYYYMMDDHHmm");
    const invoice = await models.Invoice.create({
      invoiceNumber: `${feeds.UserId}${listing.id}${now}`,
      OrderId: order.id,
      UserId: feeds.UserId,
      userRole: "Buyer",
      status: "Paid",
      fee: feeds.feeDetail.amount,
      currency: feeds.feeDetail.currency
    });

    await OrderService.process(order.id);
    const zipUrl = await InvoiceService.process(invoice.id);

    const transaction = await models.Transaction.create({
      InvoiceId: invoice.id,
      amount: invoice.fee,
      currency: feeds.feeDetail.currency,
      paymentMethod: feeds.paymentMethod,
      methodId: feeds.methodId,
      type: "Pay"
    });
    return zipUrl;
  } catch (e) {
    throw e;
  }
}

async function confirmCardOrder(UserId, feeds) {
  try {
    const zipUrl = await paymentProcess({
      UserId,
      ListingId: feeds.ListingId,
      paymentMethod: "card",
      methodId: feeds.methodId
    });
    return { zipUrl };
  } catch (e) {
    throw e;
  }
}

async function cardPaymentProcess(UserId, feeds) {
  try {
    const feeDetail = await calculateFee(feeds.ListingId);
    let upm = await models.UserPaymentMethod.findOne({ where: { UserId } });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(feeDetail.amount * 100),
      currency: feeDetail.currency,
      customer: upm.stripeCustomerId,
      payment_method: upm.card,
      off_session: true,
      confirm: true
    });
    const zipUrl = await paymentProcess({
      UserId,
      ListingId: feeds.ListingId,
      feeDetail,
      paymentMethod: "card",
      methodId: paymentIntent.id
    });
    return { zipUrl };
  } catch (err) {
    if (err.code === "authentication_required") {
      return {
        error: "authentication_required",
        paymentMethod: err.raw.payment_method.id,
        clientSecret: err.raw.payment_intent.client_secret
      };
    } else if (err.code) {
      return {
        error: err.code,
        clientSecret: null,
        message: err.message
      };
    } else {
      console.log("Unknown error occurred", err);
      throw err
    }
  }
}

async function order(UserId, feeds) {
  try {

    const feeDetail = await calculateFee(feeds.ListingId);

    let upm = await models.UserPaymentMethod.findOne({ where: { UserId } });
    let result, charge;
    if (feeds.method == "card") {
      result = await cardPaymentProcess(UserId, feeds);
    }
    else if (feeds.method == "ach") {
      charge = stripe.charges
        .create({
          amount: Math.round(feeDetail.amount * 100),
          currency: "eur",
          customer: upm.stripeCustomerId,
          source: upm.bank
        })
        .then(function (charge) { });
    }
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  addACHTransfer,
  addCard,
  addSEPA,
  order,
  confirmCardOrder,
};
