const Pedido = require('../models/Pedido');
const Itens = require('../models/Itens');

class ItensController {
    async store(req, res) {
        //Busca o pedido selecionado
        const pedido = await Pedido.findById(req.params.id);
        
        const item = await Itens.create({
            item: req.body.item,
            descricao: req.body.descricao,
            quantidade: req.body.quantidade,
            preco: req.body.preco
        });

        pedido.itens.push(item);

        await pedido.save();

        req.io.sockets.in(pedido._id).emit('itens', item);

        return res.json(item);
    }

    async show(req, res) {
        const pedido = await Pedido.findById(req.params.id).populate('itens');

        return res.json(pedido);
    }
}

module.exports = new ItensController();