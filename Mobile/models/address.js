'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.User)
    }
  };
  Address.init({
    cep: DataTypes.STRING,
    street: DataTypes.STRING,
    uf: DataTypes.STRING,
    district: DataTypes.STRING,
    locality: DataTypes.STRING,
    number: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};