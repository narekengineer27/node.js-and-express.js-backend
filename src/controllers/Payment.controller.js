import plaid from 'plaid';
import Stripe from 'stripe';
import config from "../config/settings";
import api from "../tools/common";
import PaymentService from '../services/Payment';
import models, { sequelize } from "../../models";
import InvoiceService from '../services/Invoice';

const stripe = Stripe(config.stripe.secretKey);

const plaidClient = new plaid.Client(
  config.plaid.clientId,
  config.plaid.secret,
  config.plaid.publicKey,
  plaid.environments[config.plaid.env],
  {
    version: '2019-05-29',
    clientApp: 'plastplace'
  }
);

function getSettings(req, res, next) {
  api.ok(res, {
    stripe: {
      publishableKey: config.stripe.publishableKey
    },
    plaid: {
      env: config.plaid.env,
      clientName: 'plastplace',
      publicKey: config.plaid.publicKey,
      product: config.plaid.product,
      countryCodes: config.plaid.countryCodes
    }
  });
}

async function addACHTransfer(req, res, next) {
  try {
    let upm = await PaymentService.addACHTransfer(req.UserId, req.body);
    api.ok(res, upm);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function addSEPA(req, res, next) {
  try {
    let upm = await PaymentService.addSEPA(req.UserId, req.body);
    api.ok(res, upm);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function addCard(req, res, next) {
  try {
    let upm = await PaymentService.addCard(req.UserId, req.body);
    api.ok(res, upm);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function createSetupIntent(req, res, next) {
  try {
    const intent = await stripe.setupIntents.create({});
    api.ok(res, intent.client_secret);
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

async function createSEPASetupIntent(req, res, next) {
  try {
    const setupIntent = await stripe.setupIntents.create({
      payment_method_types: ['sepa_debit'],
    });
    api.ok(res, setupIntent.client_secret);
  } catch (e) {
    console.log(e);
    api.error(res, e.message, 500);
  }
}

async function order(req, res) {
  try {

    const result = await PaymentService.order(req.UserId, req.body);
    api.ok(res, result);
  } catch (e) {
    console.log(e);
    api.error(res, e.message, 400);
  }
}

async function confirmCardOrder(req, res, next) {
  try {
    const result = await PaymentService.confirmCardOrder(req.UserId, req.body);
    api.ok(res, result);
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

async function getPaymentMethods(req, res, next) {
  try {
    let upm = await models.UserPaymentMethod.findOne({
      where: {
        UserId: req.UserId
      },
    });
    let result = [];
    if (upm && upm.card) result.push({ method: 'card' });
    if (upm && upm.iban) result.push({ method: 'iban' });
    api.ok(res, result);
  } catch (e) {
    api.error(res, e.message, 500);
  }
}

module.exports = {
  getSettings,
  addACHTransfer,
  addCard,
  addSEPA,
  getPaymentMethods,
  createSetupIntent,
  createSEPASetupIntent,
  order,
  confirmCardOrder,
}
