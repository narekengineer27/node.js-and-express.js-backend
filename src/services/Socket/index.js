import models, { sequelize } from "../../../models";

const Op = sequelize.Op;

function saveNewMessage(data) {
  models.Message.build({
    ListingId: data.ListingId,
    Sender: data.from,
    Recipient: data.to,
    content: data.message,
    isRead: false,
    time: data.time
  }).save();
}

module.exports = {
  saveNewMessage,
};
