const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

class UsuarioController {
    
    async register (req, res) {
        const {email} = req.body;
        try {
            if (await Usuario.findOne({ email }))
                return res.status(400).send({ error: 'User already exists'})


            const user = await Usuario.create(req.body);
            //esconder a senha mesmo que criptografada
            user.password = undefined;
            return res.send({ user });
        } catch (err) {
            return res.status(400).send({ error: 'Registration failed'});
        }
    }

    async show(req, res) {
        const { page = 1 } = req.query;
        const usuario = await Usuario.paginate({}, { page, limit: 10 });

        return res.json(usuario);
    }

    async authenticate(req, res) {
        const {user, password} = req.body;

        const usuario = await Usuario.findOne({ user }).select('+password');

        if(!usuario)
            return res.status(400).send({error: 'User not found'});

        if (!await bcrypt.compare(password, usuario.password))
            return res.status(400).send({ error: 'Invalid password'});

        res.send({ usuario });
    }
};

module.exports = new UsuarioController();