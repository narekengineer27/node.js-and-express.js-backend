import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import models from "../../models";
import api from "../tools/common";
import config from "../config/settings";
import ListingService from "../services/Listings";
import UserService from "../services/User";
import { avatarUploader } from "../tools/user.avatarUploader.js";
import NtfService from "../services/Notification";

function authenticate(req, res) {
  models.User.findOne({
    where: {
      id: req.UserId
    },
    attributes: {
      exclude: ["password"]
    },
    include: [
      {
        model: models.Company
      }
    ]
  })
    .then(data => {
      api.ok(res, data);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function list(req, res) {
  models.User.findAll({
    attributes: {
      exclude: ["password"]
    }
  }).then(data => {
    api.ok(res, data);
  });
}

function login(req, res) {
  models.User.findAll({
    where: {
      email: req.body.email
    },
    include: [
      {
        model: models.Company
      }
    ]
  })
    .then(async users => {
      if (users.length === 0) {
        api.error(res, "User not found", 404);
      } else {
        const user = users[0];
        if (!user.email_verified) {
          return res.status(403).json({
            status: false,
            data: { message: "Email not verified", userId: user.id }
          });
        }
        const passwordValid = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (!passwordValid) {
          api.error(res, "Password does not match", 401);
        } else {
          var theToken = jwt.sign(
            { user: user.id, email: user.email },
            config.security.salt,
            { expiresIn: 24 * 60 * 60 }
          );
          user.password = "";
          api.ok(res, { token: theToken, user: user });
        }
      }
    })
    .catch(e => {
      api.ok(res, e.message, 500);
    });
}

async function register(req, res, next) {
  let hasedPassword = bcrypt.hashSync(req.body.password, 10);

  const dummyLocation = {
    name: req.body.company,
    address: "7b Highland Park Village",
    city: "Dallas",
    CountryId: 3,
    zipcode: "75205",
    formatted_address:
      "7b Highland Park Village, Dallas, TX 75205, United States"
  };

  const extUser = await models.User.findOne({
    where: { email: req.body.email }
  });

  if (extUser) {
    api.error(res, "email already exists", 400);
    return;
  }

  models.Company.build(dummyLocation, { raw: true })
    .save()
    .then(result => {
      const companyId = result.id;
      const company = {
        id: result.id,
        name: result.name,
        address: result.address,
        city: result.city,
        CountryId: result.CountryId,
        zipcode: result.zipcode
      };

      models.User.build({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email: req.body.email,
        password: hasedPassword,
        CompanyId: companyId,
        type: "PREMIUM",
        email_verified: false
      })
        .save()
        .then(result => {
          const user = {
            id: result.id,
            first_name: result.first_name,
            last_name: result.last_name,
            email: result.email,
            email_verified: result.email_verified,
            company
          };

          UserService.emailVerification(result.id, req.headers.origin).then(
            result => {
              if (result) api.ok(res, { user });
            }
          ).catch(e => {
            api.ok(res, { user });
          });
        })
        .catch(e => {
          api.error(res, e.message, 500);
        });
    });
}

async function profile(req, res, next) {
  try {
    let user = await models.User.findByPk(req.params.UserId, {
      attributes: {
        exclude: ["password"]
      },
      include: [
        {
          model: models.Company,
          include: [
            {
              model: models.Country,
              include: [{ model: models.Currency }]
            }
          ]
        },
        {
          model: models.BusinessType
        }
      ]
    });

    if (user == null) api.error(res, "User does not exist", 404);
    else {
      const me = req.UserId;
      const you = req.params.UserId;
      const userFollower = await models.UserFollower.findOne({
        where: {
          UserId: you,
          FollowerId: me
        }
      });
      if (userFollower) {
        user.dataValues = { ...user.dataValues, follow: true };
      } else {
        user.dataValues = { ...user.dataValues, follow: false };
      }

      api.ok(res, user);
    }
  } catch (e) {
    console.log(e);
    api.error(res, e, 500);
  }
}

function getAllListings(req, res, next) {
  ListingService.getAllByUserId(req.params.UserId).then(result =>
    api.ok(res, result)
  );
}

function getSomeListingsExceptOne(req, res, next) {
  ListingService.getSomeByUserIdExceptOne(
    req.params.UserId,
    req.params.ListingId
  ).then(result => api.ok(res, result));
}

function getAll(req, res, next) {
  UserService.getAll(req.UserId, req.query.content).then(users =>
    api.ok(res, users)
  );
}

function getSearchItems(req, res, next) {
  UserService.getSearchItems(req.UserId, req.query.content).then(users => {
    api.ok(res, users);
  });
}

function getSomeFollowings(req, res, next) {
  UserService.getSomeFollowings(req.params.UserId)
    .then(follows => {
      if (follows) {
        api.ok(res, follows);
      } else {
        api.error(res, "User does not exist", 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function getSomeFollowers(req, res, next) {
  UserService.getSomeFollowers(req.params.UserId)
    .then(followers => {
      if (followers) {
        api.ok(res, followers);
      } else {
        api.error(res, "User does not exist", 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function getAllFollowings(req, res, next) {
  UserService.getAllFollowings(req.params.UserId)
    .then(follows => {
      if (follows) {
        api.ok(res, follows);
      } else {
        api.error(res, "User does not exist", 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function getAllFollowers(req, res, next) {
  UserService.getAllFollowers(req.params.UserId)
    .then(followers => {
      if (followers) {
        api.ok(res, followers);
      } else {
        api.error(res, "User does not exist", 404);
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

async function changeFollowStatus(req, res, next) {
  try {
    const me = req.UserId;
    const you = req.params.UserId;

    const Follower = await models.User.findByPk(me);
    const Following = await models.User.findByPk(you);
    const userFollow = await models.UserFollower.findOne({
      where: {
        UserId: you,
        FollowerId: me
      }
    });
    if (userFollow) {
      await userFollow.destroy();
      api.ok(res, { follow: false });
    } else {
      let result = await models.UserFollower.build({
        UserId: you,
        FollowerId: me,
        createdAt: new Date()
      }).save();
      await NtfService.notifyFollow(Following, Follower);
      api.ok(res, { follow: true });
    }
  } catch (e) {
    api.error(res, e.message, 400);
  }
}

function updateProfile(req, res, next) {
  UserService.updateProfile(req.params.UserId, req.body)
    .then(result => {
      api.ok(res, result);
    })
    .catch(e => {
      api.error(res, e.message, 400);
    });
}

function updateAvatar(req, res, next) {
  avatarUploader(req, res, async function (uploadError) {
    if (uploadError) {
      return api.error(res, uploadError, 400);
    } else {
      models.User.findByPk(req.params.UserId)
        .then(user => {
          user
            .update({
              avatar: req.file.location
            })
            .then(user => {
              api.ok(res, { avatar: user.avatar });
            });
        })
        .catch(e => {
          api.error(res, e.message, 404);
        });
    }
  });
}

function wishlist(req, res, next) {
  UserService.getWishlistByUserId(req.UserId)
    .then(listings => {
      api.ok(res, listings);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function getMyOrders(req, res, next) {
  UserService.getMyOrders(req.UserId)
    .then(listings => {
      api.ok(res, listings);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

module.exports = {
  list,
  login,
  register,
  profile,
  getAll,
  getSearchItems,
  authenticate,
  getSomeListingsExceptOne,
  getAllListings,
  getSomeFollowings,
  getSomeFollowers,
  getAllFollowings,
  getAllFollowers,
  changeFollowStatus,
  updateProfile,
  updateAvatar,
  wishlist,
  getMyOrders
};
