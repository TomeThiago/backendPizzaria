const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Itens = new mongoose.Schema(
    {
        item: { 
            type: Number,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        quantidade: {
            type: Number,
            required: true
        }, 
        preco: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

Itens.plugin(mongoosePaginate);

module.exports = mongoose.model('Itens', Itens);