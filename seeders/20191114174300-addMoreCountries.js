"use strict";

const sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Countries", [
      {
        name: "Aland Islands",
        phoneCode: "+358",
        alpha2Code: "AX",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Algeria",
        phoneCode: "+213",
        alpha2Code: "DZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "AmericanSamoa",
        phoneCode: "+1684",
        alpha2Code: "AS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Andorra",
        phoneCode: "+376",
        alpha2Code: "AD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Angola",
        phoneCode: "+244",
        alpha2Code: "AO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Anguilla",
        phoneCode: "+1264",
        alpha2Code: "AI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Antarctica",
        phoneCode: "+672",
        alpha2Code: "AQ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Antigua and Barbuda",
        phoneCode: "+1268",
        alpha2Code: "AG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Argentina",
        phoneCode: "+54",
        alpha2Code: "AR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Armenia",
        phoneCode: "+374",
        alpha2Code: "AM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Aruba",
        phoneCode: "+297",
        alpha2Code: "AW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Austria",
        phoneCode: "+43",
        alpha2Code: "AT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Azerbaijan",
        phoneCode: "+994",
        alpha2Code: "AZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bahamas",
        phoneCode: "+1242",
        alpha2Code: "BS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bahrain",
        phoneCode: "+973",
        alpha2Code: "BH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bangladesh",
        phoneCode: "+880",
        alpha2Code: "BD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Barbados",
        phoneCode: "+1246",
        alpha2Code: "BB",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Belarus",
        phoneCode: "+375",
        alpha2Code: "BY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Belgium",
        phoneCode: "+32",
        alpha2Code: "BE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Belize",
        phoneCode: "+501",
        alpha2Code: "BZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Benin",
        phoneCode: "+229",
        alpha2Code: "BJ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bermuda",
        phoneCode: "+1441",
        alpha2Code: "BM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bhutan",
        phoneCode: "+975",
        alpha2Code: "BT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bolivia, Plurinational State of",
        phoneCode: "+591",
        alpha2Code: "BO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bosnia and Herzegovina",
        phoneCode: "+387",
        alpha2Code: "BA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Botswana",
        phoneCode: "+267",
        alpha2Code: "BW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "British Indian Ocean Territory",
        phoneCode: "+246",
        alpha2Code: "IO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Brunei Darussalam",
        phoneCode: "+673",
        alpha2Code: "BN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bulgaria",
        phoneCode: "+359",
        alpha2Code: "BG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Burkina Faso",
        phoneCode: "+226",
        alpha2Code: "BF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Burundi",
        phoneCode: "+257",
        alpha2Code: "BI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cambodia",
        phoneCode: "+855",
        alpha2Code: "KH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cameroon",
        phoneCode: "+237",
        alpha2Code: "CM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Canada",
        phoneCode: "+1",
        alpha2Code: "CA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cape Verde",
        phoneCode: "+238",
        alpha2Code: "CV",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cayman Islands",
        phoneCode: "+ 345",
        alpha2Code: "KY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Central African Republic",
        phoneCode: "+236",
        alpha2Code: "CF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chad",
        phoneCode: "+235",
        alpha2Code: "TD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chile",
        phoneCode: "+56",
        alpha2Code: "CL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "China",
        phoneCode: "+86",
        alpha2Code: "CN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Christmas Island",
        phoneCode: "+61",
        alpha2Code: "CX",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cocos (Keeling) Islands",
        phoneCode: "+61",
        alpha2Code: "CC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Colombia",
        phoneCode: "+57",
        alpha2Code: "CO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Comoros",
        phoneCode: "+269",
        alpha2Code: "KM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Congo",
        phoneCode: "+242",
        alpha2Code: "CG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Congo, The Democratic Republic of the Congo",
        phoneCode: "+243",
        alpha2Code: "CD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cook Islands",
        phoneCode: "+682",
        alpha2Code: "CK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Costa Rica",
        phoneCode: "+506",
        alpha2Code: "CR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cote d'Ivoire",
        phoneCode: "+225",
        alpha2Code: "CI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Croatia",
        phoneCode: "+385",
        alpha2Code: "HR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cuba",
        phoneCode: "+53",
        alpha2Code: "CU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cyprus",
        phoneCode: "+357",
        alpha2Code: "CY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Czech Republic",
        phoneCode: "+420",
        alpha2Code: "CZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Djibouti",
        phoneCode: "+253",
        alpha2Code: "DJ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dominica",
        phoneCode: "+1767",
        alpha2Code: "DM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dominican Republic",
        phoneCode: "+1849",
        alpha2Code: "DO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ecuador",
        phoneCode: "+593",
        alpha2Code: "EC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Egypt",
        phoneCode: "+20",
        alpha2Code: "EG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "El Salvador",
        phoneCode: "+503",
        alpha2Code: "SV",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Equatorial Guinea",
        phoneCode: "+240",
        alpha2Code: "GQ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eritrea",
        phoneCode: "+291",
        alpha2Code: "ER",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Estonia",
        phoneCode: "+372",
        alpha2Code: "EE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ethiopia",
        phoneCode: "+251",
        alpha2Code: "ET",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Falkland Islands (Malvinas)",
        phoneCode: "+500",
        alpha2Code: "FK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Faroe Islands",
        phoneCode: "+298",
        alpha2Code: "FO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fiji",
        phoneCode: "+679",
        alpha2Code: "FJ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Finland",
        phoneCode: "+358",
        alpha2Code: "FI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "France",
        phoneCode: "+33",
        alpha2Code: "FR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "French Guiana",
        phoneCode: "+594",
        alpha2Code: "GF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "French Polynesia",
        phoneCode: "+689",
        alpha2Code: "PF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gabon",
        phoneCode: "+241",
        alpha2Code: "GA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gambia",
        phoneCode: "+220",
        alpha2Code: "GM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Georgia",
        phoneCode: "+995",
        alpha2Code: "GE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ghana",
        phoneCode: "+233",
        alpha2Code: "GH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gibraltar",
        phoneCode: "+350",
        alpha2Code: "GI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Greece",
        phoneCode: "+30",
        alpha2Code: "GR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Greenland",
        phoneCode: "+299",
        alpha2Code: "GL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Grenada",
        phoneCode: "+1473",
        alpha2Code: "GD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guadeloupe",
        phoneCode: "+590",
        alpha2Code: "GP",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guam",
        phoneCode: "+1671",
        alpha2Code: "GU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guatemala",
        phoneCode: "+502",
        alpha2Code: "GT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guernsey",
        phoneCode: "+44",
        alpha2Code: "GG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guinea",
        phoneCode: "+224",
        alpha2Code: "GN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guinea-Bissau",
        phoneCode: "+245",
        alpha2Code: "GW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guyana",
        phoneCode: "+595",
        alpha2Code: "GY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Haiti",
        phoneCode: "+509",
        alpha2Code: "HT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Holy See (Vatican City State)",
        phoneCode: "+379",
        alpha2Code: "VA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Honduras",
        phoneCode: "+504",
        alpha2Code: "HN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hong Kong",
        phoneCode: "+852",
        alpha2Code: "HK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hungary",
        phoneCode: "+36",
        alpha2Code: "HU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Iceland",
        phoneCode: "+354",
        alpha2Code: "IS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "India",
        phoneCode: "+91",
        alpha2Code: "IN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indonesia",
        phoneCode: "+62",
        alpha2Code: "ID",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Iran, Islamic Republic of Persian Gulf",
        phoneCode: "+98",
        alpha2Code: "IR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Iraq",
        phoneCode: "+964",
        alpha2Code: "IQ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ireland",
        phoneCode: "+353",
        alpha2Code: "IE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Isle of Man",
        phoneCode: "+44",
        alpha2Code: "IM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Israel",
        phoneCode: "+972",
        alpha2Code: "IL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Italy",
        phoneCode: "+39",
        alpha2Code: "IT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jamaica",
        phoneCode: "+1876",
        alpha2Code: "JM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Japan",
        phoneCode: "+81",
        alpha2Code: "JP",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jersey",
        phoneCode: "+44",
        alpha2Code: "JE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jordan",
        phoneCode: "+962",
        alpha2Code: "JO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kazakhstan",
        phoneCode: "+77",
        alpha2Code: "KZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kenya",
        phoneCode: "+254",
        alpha2Code: "KE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kiribati",
        phoneCode: "+686",
        alpha2Code: "KI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Korea, Democratic People's Republic of Korea",
        phoneCode: "+850",
        alpha2Code: "KP",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Korea, Republic of South Korea",
        phoneCode: "+82",
        alpha2Code: "KR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kuwait",
        phoneCode: "+965",
        alpha2Code: "KW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kyrgyzstan",
        phoneCode: "+996",
        alpha2Code: "KG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laos",
        phoneCode: "+856",
        alpha2Code: "LA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Latvia",
        phoneCode: "+371",
        alpha2Code: "LV",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lebanon",
        phoneCode: "+961",
        alpha2Code: "LB",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lesotho",
        phoneCode: "+266",
        alpha2Code: "LS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Liberia",
        phoneCode: "+231",
        alpha2Code: "LR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Libyan Arab Jamahiriya",
        phoneCode: "+218",
        alpha2Code: "LY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Liechtenstein",
        phoneCode: "+423",
        alpha2Code: "LI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lithuania",
        phoneCode: "+370",
        alpha2Code: "LT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Luxembourg",
        phoneCode: "+352",
        alpha2Code: "LU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Macao",
        phoneCode: "+853",
        alpha2Code: "MO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Macedonia",
        phoneCode: "+389",
        alpha2Code: "MK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Madagascar",
        phoneCode: "+261",
        alpha2Code: "MG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Malawi",
        phoneCode: "+265",
        alpha2Code: "MW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Maldives",
        phoneCode: "+960",
        alpha2Code: "MV",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mali",
        phoneCode: "+223",
        alpha2Code: "ML",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Malta",
        phoneCode: "+356",
        alpha2Code: "MT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Marshall Islands",
        phoneCode: "+692",
        alpha2Code: "MH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Martinique",
        phoneCode: "+596",
        alpha2Code: "MQ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mauritania",
        phoneCode: "+222",
        alpha2Code: "MR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mauritius",
        phoneCode: "+230",
        alpha2Code: "MU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mayotte",
        phoneCode: "+262",
        alpha2Code: "YT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Micronesia, Federated States of Micronesia",
        phoneCode: "+691",
        alpha2Code: "FM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Moldova",
        phoneCode: "+373",
        alpha2Code: "MD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monaco",
        phoneCode: "+377",
        alpha2Code: "MC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mongolia",
        phoneCode: "+976",
        alpha2Code: "MN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Montenegro",
        phoneCode: "+382",
        alpha2Code: "ME",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Montserrat",
        phoneCode: "+1664",
        alpha2Code: "MS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Morocco",
        phoneCode: "+212",
        alpha2Code: "MA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mozambique",
        phoneCode: "+258",
        alpha2Code: "MZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Myanmar",
        phoneCode: "+95",
        alpha2Code: "MM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Namibia",
        phoneCode: "+264",
        alpha2Code: "NA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nauru",
        phoneCode: "+674",
        alpha2Code: "NR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nepal",
        phoneCode: "+977",
        alpha2Code: "NP",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Netherlands",
        phoneCode: "+31",
        alpha2Code: "NL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Netherlands Antilles",
        phoneCode: "+599",
        alpha2Code: "AN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New Caledonia",
        phoneCode: "+687",
        alpha2Code: "NC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "New Zealand",
        phoneCode: "+64",
        alpha2Code: "NZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nicaragua",
        phoneCode: "+505",
        alpha2Code: "NI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Niger",
        phoneCode: "+227",
        alpha2Code: "NE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nigeria",
        phoneCode: "+234",
        alpha2Code: "NG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Niue",
        phoneCode: "+683",
        alpha2Code: "NU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Norfolk Island",
        phoneCode: "+672",
        alpha2Code: "NF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Northern Mariana Islands",
        phoneCode: "+1670",
        alpha2Code: "MP",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Norway",
        phoneCode: "+47",
        alpha2Code: "NO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Oman",
        phoneCode: "+968",
        alpha2Code: "OM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pakistan",
        phoneCode: "+92",
        alpha2Code: "PK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Palau",
        phoneCode: "+680",
        alpha2Code: "PW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Palestinian Territory, Occupied",
        phoneCode: "+970",
        alpha2Code: "PS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Panama",
        phoneCode: "+507",
        alpha2Code: "PA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Papua New Guinea",
        phoneCode: "+675",
        alpha2Code: "PG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paraguay",
        phoneCode: "+595",
        alpha2Code: "PY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Peru",
        phoneCode: "+51",
        alpha2Code: "PE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pitcairn",
        phoneCode: "+872",
        alpha2Code: "PN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Poland",
        phoneCode: "+48",
        alpha2Code: "PL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Portugal",
        phoneCode: "+351",
        alpha2Code: "PT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Puerto Rico",
        phoneCode: "+1939",
        alpha2Code: "PR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Qatar",
        phoneCode: "+974",
        alpha2Code: "QA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Romania",
        phoneCode: "+40",
        alpha2Code: "RO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Russia",
        phoneCode: "+7",
        alpha2Code: "RU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rwanda",
        phoneCode: "+250",
        alpha2Code: "RW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Reunion",
        phoneCode: "+262",
        alpha2Code: "RE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Barthelemy",
        phoneCode: "+590",
        alpha2Code: "BL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        phoneCode: "+290",
        alpha2Code: "SH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Kitts and Nevis",
        phoneCode: "+1869",
        alpha2Code: "KN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Lucia",
        phoneCode: "+1758",
        alpha2Code: "LC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Martin",
        phoneCode: "+590",
        alpha2Code: "MF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Pierre and Miquelon",
        phoneCode: "+508",
        alpha2Code: "PM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saint Vincent and the Grenadines",
        phoneCode: "+1784",
        alpha2Code: "VC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Samoa",
        phoneCode: "+685",
        alpha2Code: "WS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "San Marino",
        phoneCode: "+378",
        alpha2Code: "SM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sao Tome and Principe",
        phoneCode: "+239",
        alpha2Code: "ST",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Saudi Arabia",
        phoneCode: "+966",
        alpha2Code: "SA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Senegal",
        phoneCode: "+221",
        alpha2Code: "SN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Serbia",
        phoneCode: "+381",
        alpha2Code: "RS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Seychelles",
        phoneCode: "+248",
        alpha2Code: "SC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sierra Leone",
        phoneCode: "+232",
        alpha2Code: "SL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Singapore",
        phoneCode: "+65",
        alpha2Code: "SG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Slovakia",
        phoneCode: "+421",
        alpha2Code: "SK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Slovenia",
        phoneCode: "+386",
        alpha2Code: "SI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Solomon Islands",
        phoneCode: "+677",
        alpha2Code: "SB",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Somalia",
        phoneCode: "+252",
        alpha2Code: "SO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "South Africa",
        phoneCode: "+27",
        alpha2Code: "ZA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "South Sudan",
        phoneCode: "+211",
        alpha2Code: "SS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "South Georgia and the South Sandwich Islands",
        phoneCode: "+500",
        alpha2Code: "GS",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spain",
        phoneCode: "+34",
        alpha2Code: "ES",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sri Lanka",
        phoneCode: "+94",
        alpha2Code: "LK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Sudan",
        phoneCode: "+249",
        alpha2Code: "SD",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Suriname",
        phoneCode: "+597",
        alpha2Code: "SR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Svalbard and Jan Mayen",
        phoneCode: "+47",
        alpha2Code: "SJ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Swaziland",
        phoneCode: "+268",
        alpha2Code: "SZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Switzerland",
        phoneCode: "+41",
        alpha2Code: "CH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Syrian Arab Republic",
        phoneCode: "+963",
        alpha2Code: "SY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Taiwan",
        phoneCode: "+886",
        alpha2Code: "TW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tajikistan",
        phoneCode: "+992",
        alpha2Code: "TJ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tanzania, United Republic of Tanzania",
        phoneCode: "+255",
        alpha2Code: "TZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Thailand",
        phoneCode: "+66",
        alpha2Code: "TH",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Timor-Leste",
        phoneCode: "+670",
        alpha2Code: "TL",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Togo",
        phoneCode: "+228",
        alpha2Code: "TG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tokelau",
        phoneCode: "+690",
        alpha2Code: "TK",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tonga",
        phoneCode: "+676",
        alpha2Code: "TO",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Trinidad and Tobago",
        phoneCode: "+1868",
        alpha2Code: "TT",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tunisia",
        phoneCode: "+216",
        alpha2Code: "TN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Turkey",
        phoneCode: "+90",
        alpha2Code: "TR",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Turkmenistan",
        phoneCode: "+993",
        alpha2Code: "TM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Turks and Caicos Islands",
        phoneCode: "+1649",
        alpha2Code: "TC",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tuvalu",
        phoneCode: "+688",
        alpha2Code: "TV",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uganda",
        phoneCode: "+256",
        alpha2Code: "UG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ukraine",
        phoneCode: "+380",
        alpha2Code: "UA",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "United Arab Emirates",
        phoneCode: "+971",
        alpha2Code: "AE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "United Kingdom",
        phoneCode: "+44",
        alpha2Code: "GB",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uruguay",
        phoneCode: "+598",
        alpha2Code: "UY",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uzbekistan",
        phoneCode: "+998",
        alpha2Code: "UZ",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vanuatu",
        phoneCode: "+678",
        alpha2Code: "VU",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        phoneCode: "+58",
        alpha2Code: "VE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vietnam",
        phoneCode: "+84",
        alpha2Code: "VN",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Virgin Islands, British",
        phoneCode: "+1284",
        alpha2Code: "VG",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Virgin Islands, U.S.",
        phoneCode: "+1340",
        alpha2Code: "VI",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wallis and Futuna",
        phoneCode: "+681",
        alpha2Code: "WF",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Yemen",
        phoneCode: "+967",
        alpha2Code: "YE",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zambia",
        phoneCode: "+260",
        alpha2Code: "ZM",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zimbabwe",
        phoneCode: "+263",
        alpha2Code: "ZW",
        alpha3Code: "XXX",
        numCode: "000",
        CurrencyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Countries", null, {});
  }
};
