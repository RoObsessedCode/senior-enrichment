
const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {

  name: {
    type: Sequelize.STRING
    // validate: {
    //   notEmpty: true
    // },
    //allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    // validate: {
    //   isUrl: true
    // }
    // validate: {
    //   notEmpty: true
    // },
    //allowNull: false
  }

});

module.exports = Campus;
