const express = require('express');
const routes = express.Router();
const User = require('./models/Usuario');
const PedidoController = require('./controllers/PedidoController');
const ItensController = require('./controllers/ItensController');
const UsuarioController = require('./controllers/UsuarioController');

//Login
routes.get('/login', UsuarioController.show);
routes.post('/login', UsuarioController.store);
routes.put('/login/:id', UsuarioController.update);
routes.delete('/login/:id', UsuarioController.destroy);

//Pedidos
routes.get('/pedido', PedidoController.show);
routes.post('/pedido', PedidoController.store);
routes.put('/pedido/:id', PedidoController.update);
routes.delete('/pedido/:id', PedidoController.destroy);
//

//Itens do Pedido
routes.get('/pedido/:id/itens', ItensController.show);
routes.post('/pedido/:id/itens',ItensController.store);
routes.put('/pedido/:id/itens/:id2', ItensController.update);
routes.delete('/pedido/:id/itens/:id2', ItensController.destroy);
//

module.exports = routes;