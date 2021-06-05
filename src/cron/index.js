import publishAuction from "./Auction.cron";

function init() {
  publishAuction.start();
  // console.log("// Auction email and notification is temporaly disabled")
}

module.exports = {
  init
};
