const express = require('express');
const routes = express.Router();
const PedidoController = require('./controllers/PedidoController');
const ItensController = require('./controllers/ItensController');

//Login
routes.get('/login', (req, res) => {
    return res.send('Call login');
});

//Pedidos
routes.get('/pedido', PedidoController.show);
routes.post('/pedido', PedidoController.store);
routes.put('/pedido/:id/', PedidoController.update);
routes.delete('/pedido/:id/', PedidoController.destroy);
//

//Itens do Pedido
routes.get('/pedido/:id/itens/', ItensController.show);
routes.post('/pedido/:id/itens',ItensController.store);
//

module.exports = routes;