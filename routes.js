const { Router } = require('express');
const express = require('express');
const routes = express.Router();

//Definição de controllers
/**
 * Rotas de Login
 */
const LoginController = require('./src/controllers/login-controller');
logincontroller = new LoginController();

routes.post('/api/v1/login', logincontroller.login);
routes.post('/api/v1/user/create', logincontroller.create);

/**
 * Rotas de Roles
 */
const RoleController = require('./src/controllers/role-controller');
rolecontroller = new RoleController();

routes.post('/api/v1/role/create', rolecontroller.create);


module.exports = routes;