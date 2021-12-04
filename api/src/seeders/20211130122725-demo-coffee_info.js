"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "CoffeeInfos",
      [
        {
          coffee_id: 1,
          size_id: 1,
          price: "12.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 1,
          size_id: 2,
          price: "14.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 1,
          size_id: 3,
          price: "14.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 2,
          size_id: 1,
          price: "12.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 2,
          size_id: 2,
          price: "13.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 2,
          size_id: 3,
          price: "16.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 3,
          size_id: 1,
          price: "13.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 3,
          size_id: 2,
          price: "17.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 3,
          size_id: 3,
          price: "20.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 4,
          size_id: 1,
          price: "14.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 4,
          size_id: 2,
          price: "16.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 4,
          size_id: 3,
          price: "22.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 5,
          size_id: 1,
          price: "16.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 5,
          size_id: 2,
          price: "19.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 5,
          size_id: 3,
          price: "23.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 6,
          size_id: 1,
          price: "16.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 6,
          size_id: 2,
          price: "18.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 6,
          size_id: 3,
          price: "21.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 7,
          size_id: 1,
          price: "10.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 7,
          size_id: 2,
          price: "11.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 7,
          size_id: 3,
          price: "12.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 8,
          size_id: 1,
          price: "14.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 8,
          size_id: 2,
          price: "15.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          coffee_id: 8,
          size_id: 3,
          price: "16.30₺",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("CoffeeInfos", null, {});
  },
};
