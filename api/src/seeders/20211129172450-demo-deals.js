'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Offers', [{
        image: 'https://instagram.fist1-1.fna.fbcdn.net/v/t51.2885-15/e35/259168643_327268362564579_9130862468564390824_n.jpg?_nc_ht=instagram.fist1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=mzBxuQA6HgcAX9kAhy9&tn=v0UwdKRBdH1GIuKc&edm=AGenrX8BAAAA&ccb=7-4&oh=ebe6b2ef16ed55cb3a3b8b212ad0dece&oe=61ACB011&_nc_sid=5eceaa',
        title: 'Tekrarı olamayan bir yıla tekrar kullanılabilir bardağınla gir !',
        text: 'Yeni bir yıla tekrar kullanılabilir bardak ve içinde lezzetli bir kahve ile girmeye ne dersin? Yeni yıla, yeni ve güzel alışkanlıklara merhaba! 🥰 #StarbuckstaYeniYıl',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        image: 'https://instagram.fist1-2.fna.fbcdn.net/v/t51.2885-15/e35/248103165_406684050835900_5473923025030661992_n.jpg?_nc_ht=instagram.fist1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=HrokhqXcE5wAX_fSt1v&edm=AGenrX8BAAAA&ccb=7-4&oh=9ee733a6376cc801ec36605beea31d83&oe=61AD00EE&_nc_sid=5eceaa',
        title: 'Pumpkin Spice Mevsimi',
        text: 'Mevsimlerden Pumpkin Spice Latte! Efsanelerden balkabağının Starbucks bardağına dönüşmesi! 🧡 🎃',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        image: 'https://instagram.fist1-2.fna.fbcdn.net/v/t51.2885-15/e35/241126494_607367004006145_2957880423713992973_n.jpg?_nc_ht=instagram.fist1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=bkXf-_mA-8sAX_Mu9Pn&edm=AGenrX8BAAAA&ccb=7-4&oh=360d554d34ba0aa912d5432c32b03136&oe=61ABAE25&_nc_sid=5eceaa',
        title: 'Tropikal Seyahat Tadında Ferahlama',
        text: 'Tropical Mango Frozen Iced Tea tadıyla seni tropikal seyahate götürecek! Bu leziz yolculuğa hazır mısın? 🌴🏖',
        updatedAt: new Date(),
        createdAt: new Date()
      }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Offers', null, {});
  }
};
