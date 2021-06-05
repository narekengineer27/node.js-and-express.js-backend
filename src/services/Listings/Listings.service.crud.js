import models, { sequelize } from "../../../models";
import NtfService from "../Notification";

const Op = sequelize.Op;

async function addListing(UserId, feeds = {}) {

  let status = 'Active';
  if (feeds.isAuction === "true") status = 'Pending';

  const result = await models.Listing.build({
    UserId,
    title: feeds.title,
    description: feeds.description,
    status,
    CategoryId: feeds.categoryId,
    ConditionId: feeds.conditionId,
    ProductCodeId: feeds.productCodeId,
    PackagingId: feeds.packagingId,
    unit: feeds.unit,
    supply: feeds.supply,
    PricingTermId: feeds.pricingTermId,
    address: feeds.address,
    city: feeds.city,
    CountryId: feeds.countryId,
    zipcode: feeds.zipcode,
    geography: feeds.geography,
    users: feeds.users,
    quantity: feeds.quantity,
    pricePerUnit: feeds.pricePerUnit,
    isAuction: feeds.isAuction,
    auctionInterval: feeds.auctionInterval,
    auctionDateTime: feeds.auctionDateTime
  })
    .save()
    .then(async result => {
      const ListingId = result.dataValues.id;

      let images, video, pdf;
      if (feeds.files && feeds.files.images) {
        images = await Promise.all(
          feeds.files.images.map(async (item, index) => {
            const imageLink = item.location;
            await models.ListingFile.build({
              ListingId,
              url: imageLink,
              type: "IMAGE",
              order: index
            }).save();
            return item.location;
          })
        );
      }

      if (feeds.files && feeds.files.video) {
        video = feeds.files.video[0].location;
        await models.ListingFile.build({
          ListingId,
          url: video,
          type: "VIDEO",
          order: 0
        }).save();
      }

      if (feeds.files && feeds.files.pdf) {
        pdf = await Promise.all(
          feeds.files.pdf.map(async (item, index) => {
            const pdfLink = item.location;
            await models.ListingFile.build({
              ListingId,
              url: pdfLink,
              type: "PDF",
              order: index
            }).save();
            return item.location;
          })
        );
      }

      await NtfService.notifyNewListing(UserId, ListingId);
      return {
        success: true,
        data: { ...result.dataValues, images, video, pdf }
      };
    })
    .catch(e => {
      console.log(e);
      return {
        error: e.code,
        message: "input invalid"
      };
    });
  return result;
}

async function updateListing(UserId, ListingId, feeds) {
  try {
    const listing = await models.Listing.findByPk(ListingId);
    let status = 'Active';
    if (feeds.isAuction) status = 'Pending';

    await listing.update({
      UserId,
      title: feeds.title,
      description: feeds.description,
      status,
      CategoryId: feeds.categoryId,
      ConditionId: feeds.conditionId,
      ProductCodeId: feeds.productCodeId,
      PackagingId: feeds.packagingId,
      unit: feeds.unit,
      supply: feeds.supply,
      PricingTermId: feeds.pricingTermId,
      address: feeds.address,
      city: feeds.city,
      CountryId: feeds.countryId,
      zipcode: feeds.zipcode,
      geography: feeds.geography,
      users: feeds.users,
      quantity: feeds.quantity,
      pricePerUnit: feeds.pricePerUnit,
      isAuction: feeds.isAuction,
      auctionInterval: feeds.auctionInterval,
      auctionDateTime: feeds.auctionDateTime
    });

    let imageOrder = 0;
    if (feeds.deletedFiles) {
      if (typeof feeds.deletedFiles === "string") {
        feeds.deletedFiles = [feeds.deletedFiles];
      }

      let result = await models.ListingFile.destroy({
        where: {
          id: feeds.deletedFiles
        }
      });
      result = await models.ListingFile.findAll({
        where: {
          ListingId,
          type: "IMAGE"
        },
        order: [["order", "ASC"]]
      });
      for (imageOrder = 0; imageOrder < result.length; imageOrder++) {
        await result[imageOrder].update({ order: imageOrder });
      }
    }
    let images, video, pdf;
    if (feeds.files.images) {
      images = await Promise.all([
        feeds.files.images.map(async (item, index) => {
          const imageLink = item.location;
          await models.ListingFile.build({
            ListingId,
            url: imageLink,
            type: "IMAGE",
            order: imageOrder + index
          }).save();
          return item.location;
        })
      ]);
    }
    if (feeds.files.video) {
      video = feeds.files.video[0].location;
      await models.ListingFile.build({
        ListingId,
        url: video,
        type: "VIDEO",
        order: 0
      }).save();
    }

    if (feeds.files && feeds.files.pdf) {
      pdf = await Promise.all([
        feeds.files.pdf.map(async (item, index) => {
          const pdfLink = item.location;
          await models.ListingFile.build({
            ListingId,
            url: pdfLink,
            type: "PDF",
            order: index
          }).save();
          return item.location;
        })
      ]);
    }

    const updatedListing = await models.Listing.findByPk(ListingId, {
      include: [
        { model: models.ListingFile },
        { model: models.Category },
        { model: models.Condition },
        { model: models.PricingTerm },
        {
          model: models.Country,
          include: [{ model: models.Currency }]
        }
      ],
      order: [[models.ListingFile, "order", "ASC"]]
    });
    return { success: true, data: updatedListing };
  } catch (e) {
    return {
      success: false,
      error: e.code,
      message: "input invalid"
    };
  }
}

function getListings(UserId, filter) {
  return models.User.findByPk(UserId, {
    where: {
      id: UserId
    },
    attributes: ["type"],
    raw: true
  }).then(user => {
    if (user == null) {
      return [];
    }
    const usersWhere = user.type !== "PREMIUM" && user.type !== "ADMIN" ? { users: "NORMAL" } : {};
    const countryIdsWhere =
      filter.countryIds && filter.countryIds.length > 0
        ? {
          CountryId: {
            [Op.in]: filter.countryIds
          }
        }
        : {};

    const categoryIdsWhere =
      filter.categoryIds && filter.categoryIds.length > 0
        ? {
          CategoryId: {
            [Op.in]: filter.categoryIds
          }
        }
        : {};
    const conditionIdsWhere =
      filter.conditionIds && filter.conditionIds.length > 0
        ? {
          ConditionId: {
            [Op.in]: filter.conditionIds
          }
        }
        : {};
    const userIdsWhere =
      filter.userIds && filter.userIds.length > 0
        ? {
          UserId: {
            [Op.in]: filter.userIds
          }
        }
        : {};

    const where = {
      ...usersWhere,
      ...countryIdsWhere,
      ...categoryIdsWhere,
      ...conditionIdsWhere,
      ...userIdsWhere
    };
    return models.Listing.findAll({
      where,
      include: [
        { model: models.User },
        { model: models.ListingFile },
        {
          model: models.Country,
          include: [{ model: models.Currency }]
        }
      ],
      order: [[models.ListingFile, "order", "ASC"]]
    }).then(result => {
      const listings = result.map((item, index) => {
        let formatted_address = "";
        if (item.address) formatted_address += item.address;
        if (item.city)
          formatted_address +=
            formatted_address == "" ? item.city : ", " + item.city;
        if (item.zipcode)
          formatted_address +=
            formatted_address == "" ? item.zipcode : ", " + item.zipcode;
        if (item.Country && item.Country.name)
          formatted_address +=
            formatted_address == ""
              ? item.Country.name
              : ", " + item.Country.name;

        let image = "";
        if (item.ListingFiles) {
          for (let i = 0; i < item.ListingFiles.length; i++) {
            if (item.ListingFiles[i].dataValues.type == "IMAGE") {
              image = item.ListingFiles[i].dataValues.url;
              break;
            }
          }
        }
        let Currency = null;
        if (item.Country && item.Country.Currency)
          Currency = item.Country.Currency;

        return {
          id: item.id,
          UserId: item.UserId,
          title: item.title,
          pricePerUnit: item.pricePerUnit,
          unit: item.unit,
          type: item.User.type,
          isAuction: item.isAuction,
          status: item.status,
          Currency,
          formatted_address,
          image
        };
      });
      return listings;
    });
  });
}

function getDetails(ListingId) {
  return models.Listing.findByPk(ListingId, {
    include: [
      { model: models.ListingFile },
      { model: models.Category },
      { model: models.Condition },
      { model: models.PricingTerm },
      {
        model: models.Country,
        include: [{ model: models.Currency }]
      }
    ],
    order: [[models.ListingFile, "order", "ASC"]]
  }).then(item => {
    if (item == null) {
      return null;
    }

    let formatted_address = "";
    if (item.address) formatted_address += item.address;
    if (item.city)
      formatted_address +=
        formatted_address == "" ? item.city : ", " + item.city;
    if (item.zipcode)
      formatted_address +=
        formatted_address == "" ? item.zipcode : ", " + item.zipcode;
    if (item.Country.name)
      formatted_address +=
        formatted_address == "" ? item.Country.name : ", " + item.Country.name;
    let listing = { ...item.dataValues };
    listing = { ...listing, formatted_address };
    return item;
  });
}

function getByUserId(UserId, ListingId = null, limit = null) {
  const listingIdWhere = ListingId && {
    id: {
      [Op.ne]: ListingId
    }
  };

  const userIdWhere = {
    UserId
  };

  const where = { ...userIdWhere, ...listingIdWhere };

  return models.Listing.findAll({
    where,
    limit,
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
  }).then(result => {
    const listings = result.map((item, index) => {
      let image,
        formatted_address = "";
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
        isAuction: item.isAuction,
        status: item.status,
        formatted_address,
        image
      };
    });
    return listings;
  });
}

function getSomeByUserIdExceptOne(UserId, ListingId) {
  return getByUserId(UserId, ListingId, 10);
}

function getAllByUserId(UserId) {
  return getByUserId(UserId);
}

function wishlist(UserId, ListingId) {
  return isWish(UserId, ListingId).then(result => {
    if (result) {
      return models.Wishlist.destroy({ where: { UserId, ListingId } }).then(
        () => {
          return { isWish: false };
        }
      );
    } else {
      return models.Wishlist.build({ UserId, ListingId })
        .save()
        .then(() => {
          return { isWish: true };
        });
    }
  });
}

function isWish(UserId, ListingId) {
  return models.Wishlist.findOne({
    where: {
      UserId,
      ListingId
    }
  }).then(wishlist => {
    if (wishlist) return true;
    else return false;
  });
}

function isOrdered(UserId, ListingId) {
  return models.Order.findOne({
    where: {
      status: 'Active',
      BuyerId: UserId,
      ListingId
    }
  }).then(order => {
    if (order) return true;
    else return false;
  });
}

module.exports = {
  addListing,
  updateListing,
  getListings,
  getDetails,
  getAllByUserId,
  getSomeByUserIdExceptOne,
  wishlist,
  isWish,
  isOrdered,
};
