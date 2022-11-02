const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Deck }) {
      this.belongsTo(Deck, { foreignKey: 'deckId' });
    }
  }
  Question.init({
    body: DataTypes.STRING,
    deckId: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    answerOne: DataTypes.STRING,
    answerTwo: DataTypes.STRING,
    answerThree: DataTypes.STRING,
    answerFour: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Question',
    timestamps: false,
  });
  return Question;
};
