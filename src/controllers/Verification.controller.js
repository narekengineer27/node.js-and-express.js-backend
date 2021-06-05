import models from "../../models";
import api from "../tools/common";
import UserService from "../services/User";
import bcrypt from "bcrypt";

function sendVerificationMail(req, res, next) {
  UserService.emailVerification(req.params.UserId, req.headers.host)
    .then(result => {
      if (result) api.ok(res, "Email was sent");
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function verifyEmail(req, res, next) {
  models.VerificationToken.findOne({
    where: { token: req.params.token }
  }).then(verifyToken => {
    if (verifyToken) {
      models.User.findByPk(verifyToken.UserId)
        .then(user => {
          if (user == null) {
            api.ok(res, "Token invalid", 404);
          } else {
            user
              .update({ email_verified: 1 })
              .then(updatedUser => {
                api.ok(res, `User with ${user.email} has been verified`);
              })
              .catch(reason => {
                api.error(res, `Verification failed`, 500);
              });
          }
        })
        .catch(reason => {
          api.error(res, `Token invalid`, 404);
        });
    } else {
      api.error(res, `Token invalid`, 404);
    }
  });
}

function forgotPassword(req, res, next) {
  UserService.forgotPassword(req.body.email, req.headers.origin)
    .then(result => {
      if (result == null) {
        api.error(res, "user with the email does not exist", 404);
      } else {
        api.ok(res, "check your email");
      }
    })
    .catch(e => {
      console.log(e);
      api.error(res, e.message, 500);
    });
}

function resetPassword(req, res, next) {
  let hasedPassword = bcrypt.hashSync(req.body.password, 10);
  console.log(req.body.token);
  models.VerificationToken.findOne({
    where: { token: req.body.token }
  })
    .then(verifyToken => {
      if (verifyToken) {
        models.User.findByPk(verifyToken.UserId)
          .then(user => {
            if (user == null) {
              console.log("=======");
              api.error(res, "Token invalid", 404);
            } else {
              user
                .update({ password: hasedPassword })
                .then(updatedUser => {
                  api.ok(res, `password updated`);
                })
                .catch(reason => {
                  api.error(res, `password reset failed`, 500);
                });
            }
          })
          .catch(reason => {
            api.error(res, `Token invalid`, 404);
          });
      } else {
        api.error(res, `Token invalid`, 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

module.exports = {
  sendVerificationMail,
  verifyEmail,
  forgotPassword,
  resetPassword
};
