const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('esports_db', 'Leo', '123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
