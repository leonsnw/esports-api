const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Assinante = sequelize.define('Assinante', {
  codigo_assinante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_assinante: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Assinante;
