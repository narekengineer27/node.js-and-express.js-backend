import models from "../../../models";
import CategoryService from "../Category";
import ConditionService from "../Condition";
import ProductCodeService from "../ProductCode";
import PackagingService from "../Packaging";
import PricingTermService from "../PricingTerm";
import CountryService from "../Country";

async function getCategories() {
  const categories = await CategoryService.read();
  return categories;
}

async function getConditions() {
  const conditions = await ConditionService.read();
  return conditions;
}

async function getProductCodes() {
  const productCodes = await ProductCodeService.read();
  return productCodes;
}

async function getPackagings() {
  const packagings = await PackagingService.read();
  return packagings;
}

async function getPricingTerms() {
  const pricingTerms = await PricingTermService.read();
  return pricingTerms;
}

async function getCountries() {
  const countries = await CountryService.read();
  return countries;
}

async function getGeographies(UserId) {
  const localCountry = await models.User.findByPk(UserId, {
    include: [
      {
        model: models.Company
      }
    ],
    raw: true
  })
    .then(user => user["Company.CountryId"])
    .then(async countryId => {
      const country = await models.Country.findByPk(countryId, {
        raw: true
      }).then(country => country.name);
      return country;
    })
    .catch(e => {
      return e;
    });

  return [
    { value: "global", label: "All countries" },
    { value: "local", label: `Only ${localCountry}` }
  ];
}

async function getUserCompanyLocation(UserId) {
  const companyLocation = await models.User.findByPk(UserId, {
    include: [
      {
        model: models.Company
      }
    ],
    raw: true
  }).then(async user => {
    if (user["Company.CountryId"]) {
      const country = await models.Country.findByPk(user["Company.CountryId"], {
        raw: true
      }).then(country => country.name);

      return {
        country,
        address: user["Company.address"],
        city: user["Company.city"],
        countryId: user["Company.CountryId"],
        zipcode: user["Company.zipcode"]
      };
    } else {
      return {};
    }
  });
  return companyLocation;
}

function getUnits() {
  return [
    { value: "lb", label: "lb" },
    { value: "mt", label: "mt" },
    { value: "kg", label: "kg" }
  ];
}

function getSupplies() {
  return [
    { value: "Ongoing", label: "Ongoing" },
    { value: "One-off", label: "One-off" }
  ];
}

function getUsers() {
  return [
    { value: "ALL", label: "All users" },
    { value: "PREMIUM", label: "Premium users only" }
  ];
}

async function getCurrencyByUser(UserId) {
  try {
    let user = await models.User.findByPk(UserId, {
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
        }
      ]
    });
    return user.Company.Country.Currency.code;
  } catch (e) {
    return "USD";
  }
}

async function getListingProperties(UserId) {
  const categories = {
    type: "tree",
    items: await getCategories()
  };
  const conditions = {
    type: "tree",
    items: await getConditions()
  };
  const productCodes = {
    type: "tree",
    items: await getProductCodes()
  };
  const packagings = {
    type: "list",
    items: await getPackagings()
  };

  const countries = {
    type: "list",
    items: await getCountries()
  };
  const pricingTerms = {
    type: "list",
    items: await getPricingTerms()
  };

  const geographies = {
    type: "list",
    items: await getGeographies(UserId)
  };

  const companyLocation = await getUserCompanyLocation(UserId);

  const units = {
    type: "list",
    items: getUnits()
  };
  const supplies = {
    type: "list",
    items: getSupplies()
  };

  const users = {
    type: "list",
    items: getUsers()
  };

  const currency = await getCurrencyByUser(UserId);

  return {
    categories,
    conditions,
    productCodes,
    packagings,
    currency,
    units,
    supplies,
    countries,
    pricingTerms,
    geographies,
    users,
    companyLocation
  };
}

module.exports = {
  getListingProperties
};
