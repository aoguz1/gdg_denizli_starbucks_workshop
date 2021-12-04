'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Coffees.hasMany(models.CoffeeInfo, {
        foreignKey: 'coffee_id',
      });
    }
  };
  Coffees.init({
    image: DataTypes.STRING,
    coffee_name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Coffees',
  });
  return Coffees;
};