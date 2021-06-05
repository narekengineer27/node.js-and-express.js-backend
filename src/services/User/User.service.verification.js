import nodemailer from "nodemailer";
import crypto from "crypto-random-string";
import models from "../../../models";
import config from "../../config/settings";

function sendVerificationMail(to, token, host) {
  let transporter = nodemailer.createTransport({
    host: config.email.server,
    port: 587,
    secure: false,
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });
  let mailOptions = {
    from: config.email.from,
    to: to,
    subject: "plastplace verification",
    text: "verify your eamil",
    html: `<a href='${host}/confirm-account/${token}'>click here to verify your account</a>`
  };

  return transporter.sendMail(mailOptions);
}

function sendResetPasswordMail(to, token, host) {
  let transporter = nodemailer.createTransport({
    host: config.email.server,
    port: 587,
    secure: false,
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  });

  let mailOptions = {
    from: config.email.from,
    to: to,
    subject: "plastplace reset password",
    text: "reset password",
    html: `<a href='${host}/reset-password/${token}'>click here to reset your account</a>`
  };

  return transporter.sendMail(mailOptions);
}

function emailVerification(UserId, host) {
  const token = crypto({ length: 20 });
  return models.User.findByPk(UserId)
    .then(user => {
      return models.VerificationToken.build({
        UserId,
        token
      })
        .save()
        .then(() => {
          return sendVerificationMail(user.email, token, host);
        })
        .then(result => {
          return result;
        });
    })
    .catch(e => {
      throw e;
    });
}

function forgotPassword(email, host) {
  const token = crypto({ length: 20 });

  return models.User.findOne({
    where: {
      email
    }
  })
    .then(user => {
      if (user == null) {
        return null;
      } else {
        return models.VerificationToken.build({
          UserId: user.id,
          token
        })
          .save()
          .then(() => {
            return sendResetPasswordMail(user.email, token, host);
          })
          .then(result => {
            return result;
          });
      }
    })
    .catch(e => {
      throw e;
    });
}

module.exports = {
  emailVerification,
  forgotPassword
};
