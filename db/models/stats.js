const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Stat.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'stats',
  });
  return Stat;
};
