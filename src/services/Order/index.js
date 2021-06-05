import models, { sequelize } from "../../../models";
import nodemailer from "nodemailer";
import config from "../../config/settings";
import NtfService from '../Notification';

async function process(orderId) {
  const order = await models.Order.findByPk(orderId, {
    include: [
      { model: models.User, as: 'Buyer' },
      { model: models.User, as: 'Seller' },
      {
        model: models.Listing,
        include: [
          { model: models.Category },
          { model: models.Condition },
          { model: models.PricingTerm },
          {
            model: models.Country,
            include: [{ model: models.Currency }]
          },
        ]
      }
    ]
  });

  let transporter = nodemailer.createTransport({
    host: config.email.server,
    port: 587,
    secure: false,
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });

  let orderVolume = order.Listing.quantity * order.Listing.pricePerUnit;
  let fee = orderVolume * 0.03;
  const orderDetail = `<h3>order details</h3>
                        <h4>Title ${order.Listing.title}</h4>
                        <h4>Category  ${order.Listing.Category.name}</h4>
                        <h4>Condition  ${order.Listing.Condition.name}</h4>
                        <h4>Quantity  ${order.Listing.quantity} ${order.Listing.unit}</h4>
                        <h4>Supply  ${order.Listing.supply}</h4>
                        <h4>Pricing terms  ${order.Listing.PricingTerm.name}</h4>
                        <h4>Location  ${order.Listing.address}, ${order.Listing.city}, ${order.Listing.zipcode}, ${order.Listing.Country.name} </h4>
                        <h4>Price/${order.Listing.unit} ${order.Listing.Country.Currency.symbol} ${order.Listing.pricePerUnit}</h4>
                        <h4>Order volume ${order.Listing.Country.Currency.symbol} ${orderVolume}</h4>
                        <br/>
                        <h3>fee ${order.Listing.Country.Currency.symbol} ${fee}</h4>`
  const htmlForBuyer = `<h2>Thank you for your ordering</h2>
                          <br/>
                            ${orderDetail}                          
                          <br/>
                          You need to wait ${order.Seller.name} to confirm your ordering`;
  const htmlForSeller = `<h2>${order.Buyer.first_name} ${order.Buyer.last_name} ordered your listing ${order.Listing.title}.</h2>
                          <br/>
                            ${orderDetail}
                          <br/>
                          You need to confirm ${order.Buyer.first_name} ${order.Buyer.last_name}'s order in our platform.`;

  const mailOptionsForBuyer = {
    from: config.email.from,
    to: order.Buyer.email,
    subject: "order confirmation",
    text: "",
    html: htmlForBuyer
  };

  const mailOptionsForSeller = {
    from: config.email.from,
    to: order.Seller.email,
    subject: "order confirmation",
    text: "",
    html: htmlForSeller
  };

  transporter.sendMail(mailOptionsForBuyer);
  transporter.sendMail(mailOptionsForSeller);
  NtfService.notifyNewOrder(orderId);
}

module.exports = {
  process
};
