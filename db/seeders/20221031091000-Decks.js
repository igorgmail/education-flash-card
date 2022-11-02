/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [{
      title: 'Страны и их столицы',
      type: 'field',
      img: 'beaverOne.jpg',
    },
    {
      title: 'ДА или НЕТ',
      type: 'yesno',
      img: 'beaverTwo.png',
    },
    {
      title: 'Halloween',
      type: 'About Halloween ))',
      img: 'halloween.jpg',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
