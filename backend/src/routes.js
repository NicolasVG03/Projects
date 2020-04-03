const express = require('express');

const funcionariosController = require('./controllers/FuncionarioController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/funcionarios', funcionariosController.index);
routes.post('/funcionarios', funcionariosController.create);

routes.post('/session', SessionController.create);
  

module.exports = routes;