const Pedido = require('../models/Pedido');

class PedidoController {
    async store(req, res) {
        const pedido = await Pedido.create({ 
            numero: req.body.numero, 
            mesa: req.body.mesa, 
            cliente: req.body.cliente 
        });
       
        return res.json(pedido);
    }

    async show(req, res) {
        const pedido = await Pedido.findById(req.params.id).populate('itens');

        return res.json(pedido);
    }
}

module.exports = new PedidoController();