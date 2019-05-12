const express = require('express');
const routes = express.Router();
const PedidoController = require('./controllers/PedidoController');
const ItensController = require('./controllers/ItensController');

//Login
routes.get('/login', (req, res) => {
    return res.send('Hello World');
});

//Pedidos
routes.get('/pedido/:id', PedidoController.show);

routes.post('/pedido', PedidoController.store);
//

//Itens do Pedido
routes.get('/pedido/:id/itens/', (req, res) => {
    return res.send('Hello World3');
});

routes.post('/pedido/:id/itens',ItensController.store);
//

module.exports = routes;