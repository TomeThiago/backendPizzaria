const mongoose = require('mongoose');

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

module.exports = mongoose.model('Itens', Itens);