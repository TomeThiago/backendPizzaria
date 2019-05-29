const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate');

const Usuario = new mongoose.Schema({
    user: { 
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    password: { 
        type: String,
        required: true,
        select: false
    },
}, {
    timestamps: true
});

Usuario.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

Usuario.plugin(mongoosePaginate);

module.exports = mongoose.model('Usuario', Usuario);