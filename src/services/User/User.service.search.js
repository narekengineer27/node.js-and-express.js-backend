import models, { sequelize } from "../../../models";

const Op = sequelize.Op;

function getAll() {}

function getSearchItems(UserId, content) {
  const nameWhere = sequelize.where(
    sequelize.fn(
      "concat",
      sequelize.fn("lower", sequelize.col("first_name")),
      sequelize.fn("lower", sequelize.col("last_name"))
    ),
    {
      [Op.like]: sequelize.fn("lower", `%${content}%`)
    }
  );
  const emailWhere = sequelize.where(
    sequelize.fn("lower", sequelize.col("email")),
    {
      [Op.like]: sequelize.fn("lower", `%${content}%`)
    }
  );
  const likeWhere = {
    [Op.or]: [nameWhere, emailWhere]
  };
  const userWhere = {
    id: {
      [Op.ne]: UserId
    }
  };
  return models.User.findAll({
    where: { ...userWhere, ...likeWhere },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt"]
    },
    include: {
      model: models.Company,
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      }
    }
  }).then(users => {
    return users;
  });
}

module.exports = {
  getAll,
  getSearchItems
};
