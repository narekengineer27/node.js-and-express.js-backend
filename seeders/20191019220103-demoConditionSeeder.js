module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Conditions', [
      {
        id: 1,
        name: 'Recycled',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Virgin',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Baled',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Densified',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Branded Prime',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Conditions', null, {});
  }
};
