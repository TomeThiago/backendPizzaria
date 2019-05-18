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
        const { page = 1 } = req.query;
        const pedido = await Pedido.paginate({}, { page, limit: 10 });

        return res.json(pedido);
    }

    async update(req, res) {
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(pedido);
    }

    async destroy(req, res) {
        await Pedido.findByIdAndRemove(req.params.id);

        return res.send();
    }
};

module.exports = new PedidoController();