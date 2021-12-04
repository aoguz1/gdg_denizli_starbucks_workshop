'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoffeeInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.CoffeeInfo.belongsTo(models.Coffees, {
        foreignKey: 'coffee_id'
      });
      models.CoffeeInfo.belongsTo(models.Sizes, {
        foreignKey: 'size_id'
      });
    }
  };
  CoffeeInfo.init({
    coffee_id: DataTypes.INTEGER,
    size_id: DataTypes.INTEGER,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CoffeeInfo',
  });
  return CoffeeInfo;
};