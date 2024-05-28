const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('Player', {
  codigo_jogador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_jogador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  habilidade_principal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Player;
