const mongoose = require('mongoose');

const Pedido = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
    },
    mesa: { type: Number },
    total: {type: Number},
    cliente: {type: String},
    itens: [{type: mongoose.Schema.Types.ObjectId, ref: 'Itens'}]
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Pedido', Pedido);