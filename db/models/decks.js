const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'deckId' });
    }
  }
  Deck.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Deck',
    timestamps: false,
  });
  return Deck;
};
