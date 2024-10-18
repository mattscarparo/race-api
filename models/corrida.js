'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Corrida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Corrida.init({
    nomeDoEvento: DataTypes.STRING,
    dataDoEvento: DataTypes.DATEONLY,
    pilotos: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Corrida',
  });
  return Corrida;
};