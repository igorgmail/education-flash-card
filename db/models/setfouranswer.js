const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SetFourAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      this.belongsTo(Question, { foreignKey: 'answerId' });
    }
  }
  SetFourAnswer.init({
    answerId: DataTypes.INTEGER,
    answerOne: DataTypes.STRING,
    answerTwo: DataTypes.STRING,
    answerThree: DataTypes.STRING,
    answerFour: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SetFourAnswer',
    timestamps: false,
  });
  return SetFourAnswer;
};
