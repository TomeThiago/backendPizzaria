const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Usuario = new mongoose.Schema({
    user: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true,
        select: false
    },
}, {
    timestamps: true
});

Usuario.plugin(mongoosePaginate);

module.exports = mongoose.model('Usuario', Usuario);