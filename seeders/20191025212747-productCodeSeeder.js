'use strict';

const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCodes', [
      {
        id: 5,
        code: '391520',
        description: 'Waste, Parings and Scrap of Polymers of Styrene',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        code: '391530',
        description: 'Waste, Parings and Scrap of Polymers of Vinyl Chloride',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        code: '3915900010',
        description: 'Waste, Parings and Scrap of Other Plastics - PET',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        code: '3915900090',
        description: 'Waste, Parings and Scrap of Other Plastics - OTHER',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        code: '390120',
        description: 'Polyethylene with specific gravity of 0.94 and more in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        code: '390130',
        description: 'Ethylene-vinyl acetate (EVA) copolymers in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        code: '390810',
        description: 'Polyamides (PA) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        code: '390950',
        description: 'Polyurethanes in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        code: '390610',
        description: 'Polymethyl methacrylate (PMMA) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        code: '390519',
        description: 'Polyvinyl acetate (PVA) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        code: '390710',
        description: 'Polyacetals in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        code: '390760',
        description: 'Polyethylene terephthalate (PET) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        code: '390730',
        description: 'Epoxide resins in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        code: '390740',
        description: 'Polycarbonates in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        code: '390750',
        description: 'Alkyd resins in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        code: '390410',
        description: 'Polyvinyl chloride (PVC), not mixed, in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        code: '390311',
        description: 'Polystyrene (PS) expansible in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        code: '390330',
        description: 'Acrylonitrile butadiene styrene (ABS) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        code: '390210',
        description: 'Polypropylene (PP) in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        code: '390720',
        description: 'Other Polyethers in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        code: '390799',
        description: 'Other Polyesters in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        code: '390799',
        description: 'Other Polyesters in Primary form',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        code: null,
        description: 'Other',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        code: '470710',
        description: 'Waste & scrap of unbleached kraft paper or paperboard or of corrugated paper or paperboard',
        parentId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCodes', {
      id: {
        [Op.gt]: 4
      }
    }, {});
  }
};
