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

        return res.json(item);
    }

    async show(req, res) {
        const itens = await Pedido.findById(req.params.id).populate('itens');

        return res.json(itens);
    }

    async update(req, res) {
        const { descricao, tamanho, quantidade, preco, total } = req.body;
        //Busca o pedido selecionado
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, {
            descricao, 
            tamanho, 
            quantidade, 
            preco, 
            total
        }, { new: true });
        
        pedido.item = [];
        await item.remove({ pedido: pedido._id });

        const item = await Itens.create({
            descricao: req.body.descricao,
            tamanho: req.body.tamanho,
            quantidade: req.body.quantidade,
            preco: req.body.preco,
            total: req.body.total
        });

        pedido.itens.push(item);

        await pedido.save();

        return res.json(item);
    }

    async destroy(req, res) {
        //Busca o pedido selecionado
        const pedido = await Pedido.findById(req.params.id);

        pedido.itens.push(item);

        await pedido.save();

        return res.json(item);
    }
}

module.exports = new ItensController();