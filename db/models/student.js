
const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true
    },
    allowNull: false
  }

});

module.exports = Student;

