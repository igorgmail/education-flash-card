/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deckId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Decks',
          key: 'id',
        },
      },
      answer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      answerOne: {
        type: Sequelize.STRING,
      },
      answerTwo: {
        type: Sequelize.STRING,
      },
      answerThree: {
        type: Sequelize.STRING,
      },
      answerFour: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
