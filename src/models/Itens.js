const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Itens = new mongoose.Schema(
    {
        descricao: {
            type: String,
            required: true
        },

        pedido: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pedido',
            required: true,
        },

        tamanho: {
            type: String,
            required: true,
            default: 'Grande'
        },

        quantidade: {
            type: Number,
            required: true,
            default: 1
        },

        preco: {
            type: Number,
            required: true,
            default: 0.00,
        },

        total: {
            type: Number,
            required: true,
            default: 0.00,
        },

    }, 
    {
        timestamps: true
    }
);

Itens.plugin(mongoosePaginate);

module.exports = mongoose.model('Itens', Itens);