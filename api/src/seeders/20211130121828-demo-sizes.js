'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Sizes', [
    {
      name: 'Tall',
      size: '354 ml',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name: 'Grande',
      size: '473 ml',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      name: 'Venti',
      size: '591 ml',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Sizes', null, {});
  }
};
