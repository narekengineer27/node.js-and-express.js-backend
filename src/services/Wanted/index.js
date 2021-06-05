import models, { sequelize } from "../../../models";
import CountryService from "../Country";
import CategoryService from "../Category";
import ConditionService from "../Condition";

const Op = sequelize.Op;

async function getMatch(Wanted, countryIds) {
  let where = { CategoryId: Wanted.CategoryId };
  if (Wanted.ConditionId) where = { ...where, ConditionId: Wanted.ConditionId };

  if (countryIds && countryIds.length > 0)
    where = {
      ...where,
      CountryId: {
        [Op.in]: countryIds
      }
    };
  const match = await models.Listing.count({
    where
  });
  return match;
}

async function addWanted(feeds) {
  try {
    let {
      name,
      UserId,
      CategoryId,
      ConditionId,
      countryIds,
      notification
    } = feeds;
    let Wanted = await models.Wanted.create({
      name,
      UserId,
      CategoryId,
      ConditionId,
      notification
    });

    if (countryIds && countryIds[0] == null) {
      countryIds = [];
    }
    if (countryIds) {
      countryIds.map(async CountryId => {
        if (CountryId)
          await models.WantedCountry.create({ WantedId: Wanted.id, CountryId });
      });
    }

    Wanted = await models.Wanted.findByPk(Wanted.id, {
      include: [{ model: models.Category }, { model: models.Condition }]
    });

    const match = await getMatch(Wanted, countryIds);

    Wanted.dataValues = { ...Wanted.dataValues, countryIds, match };
    return Wanted;
  } catch (e) {
    throw e;
  }
}

async function updateWanted(WantedId, feeds) {
  try {
    let {
      name,
      UserId,
      CategoryId,
      ConditionId,
      countryIds,
      notification
    } = feeds;
    let Wanted = await models.Wanted.findByPk(WantedId);
    if (Wanted) {
      await Wanted.update({
        name,
        UserId,
        CategoryId,
        ConditionId,
        notification
      });
      await models.WantedCountry.destroy({ where: { WantedId } });

      if (countryIds && countryIds[0] == null) {
        countryIds = [];
      }
      if (countryIds)
        countryIds.map(async CountryId => {
          if (CountryId)
            await models.WantedCountry.create({ WantedId, CountryId });
        });

      Wanted = await models.Wanted.findByPk(Wanted.id, {
        include: [{ model: models.Category }, { model: models.Condition }]
      });

      const match = await getMatch(Wanted, countryIds);

      Wanted.dataValues = { ...Wanted.dataValues, countryIds, match };
      return Wanted;
    } else {
      return null;
    }
  } catch (e) {
    throw e;
  }
}

function getDetail(WantedId) {
  return models.Wanted.findOne({
    where: {
      id: WantedId
    },
    include: [{ model: models.WantedCountry }]
  }).catch(e => {
    throw e;
  });
}

async function deleteWanted(WantedId) {
  try {
    await models.WantedCountry.destroy({
      where: {
        WantedId
      }
    });
    const wanted = await models.Wanted.destroy({
      where: {
        id: WantedId
      }
    });
    return wanted;
  } catch (e) {
    throw e;
  }
}

function getAll(UserId) {
  return models.Wanted.findAll({
    where: {
      UserId
    },
    include: [
      { model: models.WantedCountry },
      { model: models.Category },
      { model: models.Condition }
    ]
  }).then(async wants => {
    const list = await Promise.all(
      wants.map(async Wanted => {
        const countryIds = Wanted.WantedCountries.map(
          wantedCountry => wantedCountry.dataValues.CountryId
        );

        const match = await getMatch(Wanted, countryIds);

        delete Wanted.dataValues.WantedCountries;
        Wanted.dataValues = { ...Wanted.dataValues, countryIds, match };
        return Wanted;
      })
    );
    return list;
  });
}

async function getProperties() {
  const categories = await CategoryService.read();
  const countries = await CountryService.read();
  const conditions = await ConditionService.read();

  return {
    categories: {
      type: "tree",
      items: categories
    },
    conditions: {
      type: "tree",
      items: conditions
    },
    countries: {
      type: "list",
      items: countries
    }
  };
}

module.exports = {
  addWanted,
  updateWanted,
  getDetail,
  deleteWanted,
  getAll,
  getProperties
};
