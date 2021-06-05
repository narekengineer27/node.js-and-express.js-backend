import api from "../tools/common";
import jwt from "jsonwebtoken";
import config from "../config/settings";
var salt = config.security.salt;

function authorization(req, res, next) {
  var token = req.headers["authorization"];
  if (token && token.startsWith("Bearer ")) token = token.substring(7);

  if (token) {
    jwt.verify(token, salt, function(err, decoded) {
      if (err) {
        // api.error(res, "Token consistency error", "401");
        api.error(res, err.message, "401");
      } else {
        req.UserId = decoded.user;
        return next();
      }
    });
  } else {
    api.error(res, "Token not provided", "401");
  }
}

module.exports = {
  authorization
};
