import models, { sequelize } from "../../../models";

const Op = sequelize.Op;

function getListings(UserId, content, limit = null) {
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
    const activeWhere = { status: "Active" };
    const likeWhere = {
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${content}%`
          }
        },
        {
          description: {
            [Op.like]: `%${content}%`
          }
        },
        {
          address: {
            [Op.like]: `%${content}%`
          }
        },
        {
          pricePerUnit: {
            [Op.like]: `%${content}%`
          }
        }
      ]
    };
    const where = { ...usersWhere, ...activeWhere, ...likeWhere };
    return models.Listing.findAll({
      limit,
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
        if (item.Country.name)
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
        return {
          id: item.id,
          UserId: item.UserId,
          title: item.title,
          pricePerUnit: item.pricePerUnit,
          unit: item.unit,
          type: item.User.type,
          Currency: item.Country.Currency,
          formatted_address,
          image
        };
      });
      return listings;
    });
  });
}

function getSearchResult(UserId, content) {
  return getListings(UserId, content, 10);
}

function getAllSearchResult(UserId, content) {
  return getListings(UserId, content);
}

module.exports = {
  getSearchResult,
  getAllSearchResult
};
