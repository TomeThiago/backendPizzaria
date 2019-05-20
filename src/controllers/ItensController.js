const Pedido = require('../models/Pedido');
const Itens = require('../models/Itens');

class ItensController {
    async store(req, res) {
        //Busca o pedido selecionado
        const pedido = await Pedido.findById(req.params.id);
        
        const item = await Itens.create({
            descricao: req.body.descricao,
            tamanho: req.body.tamanho,
            quantidade: req.body.quantidade,
            preco: req.body.preco,
            total: req.body.total
        });

        pedido.itens.push(item);

        await pedido.save();

        req.io.sockets.in(pedido._id).emit('itens', item);

        return res.json(item);
    }

    async show(req, res) {
        const itens = await Pedido.findById(req.params.id).populate('itens');

        return res.json(itens);
    }

    async update(req, res) {
       
    }

    async destroy(req, res) {
        
    }
}

module.exports = new ItensController();