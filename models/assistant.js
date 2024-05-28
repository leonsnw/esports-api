const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Assistant = sequelize.define('Assistant', {
  codigo_assistente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_assistente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especialidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Assistant;
