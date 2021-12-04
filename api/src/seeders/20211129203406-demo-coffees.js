'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Coffees', [{
      image: 'https://www.starbucks.com.tr/media/cappuccino_tcm95-64114_w1024_n.png',
      coffee_name: 'Cappuccino',
      desc: 'Espresso, buharla ısıtılmış ve köpürtülmüş süt. (Alerjen: Süt)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/White_Chocolate_Mocha_tcm95-64109_w1024_n.png',
      coffee_name: 'White Chocolate Mocha',
      desc: 'Beyaz çikolata sosu, espresso, buharla ısıtılmış süt ve krema. (Alerjen: Süt)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/caffe-latte_tcm95-64101_w1024_n.png',
      coffee_name: 'Caffè Latte',
      desc: 'Espresso ve buharla ısıtılmış süt. (Alerjen: Süt)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/caffe-mocha_tcm95-64107_w1024_n.png',
      coffee_name: 'Caffè Mocha',
      desc: 'Mocha sosu, espresso, buharla ısıtılmış süt ve krema. (Alerjen: Süt)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/caramel-macchiato_tcm95-64111_w1024_n.png',
      coffee_name: 'Caramel Macchiato',
      desc: 'Vanilya şurubu, buharla ısıtılmış süt, süt köpüğüne eklenen espresso ve karamel. (Alerjen: Süt, Soya)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/buzlu-caramel-macchiato_tcm95-65450_w1024_n.png',
      coffee_name: 'Buzlu Caramel Macchiato',
      desc: 'Vanilya şurubu, buz ,süt köpüğüne eklenen espresso ve karamel. (Alerjen: Süt, Soya)',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/caffe-americano_tcm95-64116_w1024_n.png',
      coffee_name: 'Caffè Americano',
      desc: 'Yoğun espressonun sıcak su ile inceltilmesi.',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    {
      image: 'https://www.starbucks.com.tr/media/espresso_tcm95-64118_w1024_n.png',
      coffee_name: 'Espresso',
      desc: 'Özel kavrulmuş yoğun kahvemiz.',
      updatedAt: new Date(),
      createdAt: new Date()
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Coffees', null, {});
  }
};
