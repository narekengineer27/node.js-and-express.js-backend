import SocketService from "../services/Socket";

var sockets = {};
sockets.init = function(server) {
  sockets.io = require("socket.io").listen(server);
  sockets.io.set('origins', '*:*');

  sockets.io.on("connection", socket => {
    socket.on("SET_USERID", data => {
      socket.userId = data.userId;
    });

    socket.on("SEND_NEW_MESSAGE", data => {
      if (data.from == socket.userId) {
        SocketService.saveNewMessage(data);
      }
      for (let key in sockets.io.sockets.sockets) {
        if (sockets.io.sockets.sockets.hasOwnProperty(key)) {
          if (data.to == sockets.io.sockets.sockets[key].userId) {
            sockets.io.sockets.sockets[key].emit("RECEIVE_NEW_MESSAGE", {
              ListingId: data.ListingId,
              Sender: data.from,
              Recipient: data.to,
              content: data.message,
              isRead: false,
              time: data.time
            });
          }
        }
      }
    });

    socket.on("SEND_GET_ONLINE_STATUS_REQUEST", data => {
      let isOnline = false;

      for (let key in sockets.io.sockets.sockets) {
        if (sockets.io.sockets.sockets.hasOwnProperty(key)) {
          if (data.opponentId == sockets.io.sockets.sockets[key].userId) {
            isOnline = true;
          }
        }
      }

      socket.emit("GET_ONLINE_STATUS", { status: isOnline });
    });

    socket.on("SEND_GET_ONLINE_STATUS_ARRAY_REQUEST", data => {

      let isOnline = [];
      for (let key in sockets.io.sockets.sockets) {
        if (sockets.io.sockets.sockets.hasOwnProperty(key)) {
          isOnline[sockets.io.sockets.sockets[key].userId] = true;
        }
      }
      let result = [];
      for (let item of data) {
        if (isOnline[item] == true) {
          result.push({ UserId: item, status: true });
        } else {
          result.push({ UserId: item, status: false });
        }
      }
      socket.emit("GET_ONLINE_STATUS_ARRAY", result);
    });
  });
};

module.exports = {
  sockets
};
