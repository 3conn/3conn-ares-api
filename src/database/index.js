const Sequelize = require('sequelize');
const dbconfig = require('../../config/config.json');
const connection = new Sequelize(dbconfig);

const User = require('../../models/user');
User.init(connection);

const Role = require('../../models/role');
Role.init(connection);

module.exports = connection;