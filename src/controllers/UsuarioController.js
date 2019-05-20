const Usuario = require('../models/Usuario');

class UsuarioController {
    
    async store(req, res) {
        const usuario = await Usuario.create({ 
            user: req.body.user,
            password: req.body.password,
        });
       
        return res.json(usuario);
    }

    async show(req, res) {
        const { page = 1 } = req.query;
        const usuario = await Usuario.paginate({}, { page, limit: 10 });

        return res.json(usuario);
    }

    async update(req, res) {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(usuario);
    }

    async destroy(req, res) {
        await Usuario.findByIdAndRemove(req.params.id);

        return res.send();
    }
};

module.exports = new UsuarioController();