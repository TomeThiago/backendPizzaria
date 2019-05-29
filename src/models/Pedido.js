const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Pedido = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
    },

    mesa: {type: Number},

    total: {
        type: Number,
        default: 0.00,
    },

    cliente: {
        type: String,
        default: 'Não identificado',
    },
    
    itens: [{type: mongoose.Schema.Types.ObjectId, ref: 'Itens'}]
}, 
{
    timestamps: true
});

Pedido.plugin(mongoosePaginate);

module.exports = mongoose.model('Pedido', Pedido);