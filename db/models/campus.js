
const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING

  },
  imageUrl: {
    type: Sequelize.STRING,

  }

});

module.exports = Campus;
