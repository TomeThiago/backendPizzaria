const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongoosePaginate = require('mongoose-paginate');

const Pedido = new mongoose.Schema({
    numero: {
        type: Number,
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

Pedido.plugin(AutoIncrement, {inc_field: 'numero'});
Pedido.plugin(mongoosePaginate);

module.exports = mongoose.model('Pedido', Pedido);