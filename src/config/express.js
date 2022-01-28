const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../../routes');
const Sequelize = require('../../config/index');

require('dotenv').config()
require('express-async-errors');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.APP_PORT);

  // MIDDLEWARES
  // create application/x-www-form-urlencoded parser
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(
    express.urlencoded({
      extended: true
    })
  )

  //Importa as configurações de conexão com o banco de dados
  require('../../config');

  // parse application/json
  app.use(bodyParser.json({
    limit: '50mb'
  }));

  app.use(cors({
    origin: '*'
    //origin: ['https://www.section.io', 'https://www.google.com/']
  }))

  //Routes
  app.use(routes);

  return app;
};