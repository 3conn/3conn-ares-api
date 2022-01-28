const Sequelize = require('sequelize');
const dbcfg = require('../config/config.json')['development'];

const connection = new Sequelize(dbcfg);

const User = require('../models/user');
User.init(connection);

const Role = require('../models/role');
Role.init(connection);

module.exports=connection;