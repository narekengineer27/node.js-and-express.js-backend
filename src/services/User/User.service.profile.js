import models, { sequelize } from "../../../models";

const Op = sequelize.Op;

function getFollowings(UserId, limit = null) {
  return models.User.findByPk(UserId, {
    attributes: ["id"],
    include: [
      {
        model: models.User,
        as: "followings",
        attributes: ["id", "first_name", "last_name", "avatar"],
        include: [
          {
            model: models.Company,
            attributes: ["formatted_address"]
          }
        ]
      }
    ]
  }).then(user => {
    if (user) {
      let followings = user.followings;
      if (limit) followings = followings.slice(0, limit);
      return {
        total: followings.length,
        followings
      };
    } else {
      return null;
    }
  });
}

function getFollowers(UserId, limit = null) {
  return models.User.findByPk(UserId, {
    attributes: ["id"],
    include: [
      {
        model: models.User,
        as: "followers",
        attributes: ["id", "first_name", "last_name", "avatar"],
        include: [
          {
            model: models.Company,
            attributes: ["formatted_address"]
          }
        ]
      }
    ]
  }).then(user => {
    if (user) {
      let followers = user.followers;
      if (limit) followers = followers.slice(0, limit);
      return {
        total: followers.length,
        followers
      };
    } else {
      return null;
    }
  });
}

function getSomeFollowings(UserId) {
  return getFollowings(UserId, 28);
}

function getSomeFollowers(UserId) {
  return getFollowers(UserId, 28);
}

function getAllFollowings(UserId) {
  return getFollowings(UserId);
}

function getAllFollowers(UserId) {
  return getFollowers(UserId);
}

async function updateProfile(UserId, feeds) {
  try {
    let user = await models.User.findByPk(UserId);

    // simple text info update
    await user.update({
      first_name: feeds.first_name,
      last_name: feeds.last_name,
      businessDescription: feeds.businessDescription
    });

    // business type update
    await models.UserBusinessType.destroy({
      where: {
        UserId
      }
    });

    if (feeds.UserBusinessTypes) {
      let businessTypes = [];
      feeds.UserBusinessTypes.forEach((item, index) => {
        businessTypes = [
          ...businessTypes,
          { UserId, BusinessTypeId: item, createdAt: new Date() }
        ];
      });
      await models.UserBusinessType.bulkCreate(businessTypes);
    }

    // location update
    if (feeds.location) {
      const company = await models.Company.findByPk(user.CompanyId);
      await company.update({ name: feeds.company });
      const country = await models.Country.findOne({
        where: {
          alpha2Code: feeds.location.alpha2Code
        }
      });
      if (country && country.id) {
        await company.update({
          formatted_address: feeds.location.formatted_address,
          address: feeds.location.address,
          zipcode: feeds.location.zipcode,
          city: feeds.location.city,
          CountryId: country.id
        });
      }
    }

    // return user's all info except password
    user = await models.User.findByPk(UserId, {
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
    return user;
  } catch (e) {
    throw e;
  }
}

function getWishlistByUserId(UserId) {
  return models.Wishlist.findAll({
    where: {
      UserId
    },
    include: [
      {
        model: models.Listing,
        include: [
          { model: models.ListingFile },
          {
            model: models.Country,
            include: [
              {
                model: models.Currency
              }
            ]
          }
        ],
        order: [[models.ListingFile, "order", "ASC"]]
      }
    ]
  }).then(result => {
    const listings = result.map((wish, index) => {
      let item = wish.Listing;
      let image,
        formatted_address = "";
      if (item.address) formatted_address += item.address;
      if (item.city)
        formatted_address +=
          formatted_address == "" ? item.city : ", " + item.city;
      if (item.zipcode)
        formatted_address +=
          formatted_address == "" ? item.zipcode : ", " + item.zipcode;
      if (item.Country.name)
        formatted_address +=
          formatted_address == ""
            ? item.Country.name
            : ", " + item.Country.name;

      if (item.ListingFiles) {
        for (let i = 0; i < item.ListingFiles.length; i++) {
          if (item.ListingFiles[i].dataValues.type == "IMAGE") {
            image = item.ListingFiles[i].dataValues.url;
            break;
          }
        }
      }

      return {
        id: item.id,
        UserId: item.UserId,
        title: item.title,
        pricePerUnit: item.pricePerUnit,
        unit: item.unit,
        Currency: item.Country.Currency,
        formatted_address,
        image
      };
    });
    return listings;
  });
}

function getMyOrders(UserId) {
  return models.Order.findAll({
    where: {
      BuyerId: UserId,
      status: 'Active'
    },
    include: [
      {
        model: models.Listing,
        include: [
          { model: models.ListingFile },
          {
            model: models.Country,
            include: [
              {
                model: models.Currency
              }
            ]
          }
        ],
        order: [[models.ListingFile, "order", "ASC"]]
      }
    ]
  }).then(result => {
    const listings = result.map((order, index) => {
      let item = order.Listing;
      let image,
        formatted_address = "";
      if (item.address) formatted_address += item.address;
      if (item.city)
        formatted_address +=
          formatted_address == "" ? item.city : ", " + item.city;
      if (item.zipcode)
        formatted_address +=
          formatted_address == "" ? item.zipcode : ", " + item.zipcode;
      if (item.Country.name)
        formatted_address +=
          formatted_address == ""
            ? item.Country.name
            : ", " + item.Country.name;

      if (item.ListingFiles) {
        for (let i = 0; i < item.ListingFiles.length; i++) {
          if (item.ListingFiles[i].dataValues.type == "IMAGE") {
            image = item.ListingFiles[i].dataValues.url;
            break;
          }
        }
      }

      return {
        id: item.id,
        UserId: item.UserId,
        title: item.title,
        pricePerUnit: item.pricePerUnit,
        unit: item.unit,
        Currency: item.Country.Currency,
        formatted_address,
        image
      };
    });
    return listings;
  });
}


module.exports = {
  getSomeFollowings,
  getSomeFollowers,
  getAllFollowers,
  getAllFollowings,
  updateProfile,
  getWishlistByUserId,
  getMyOrders
};
