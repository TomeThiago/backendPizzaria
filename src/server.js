const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//permite a conexão de outros dominios
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

//Conectando sala único
io.on('connection', socket => {
    socket.on('connectRoom', pedido => {
        socket.join(pedido);
    })
});

//Configuração de conexão com o mongoDB
mongoose.connect('mongodb+srv://ProjPizza:ProjPizza2019@cluster0-jtais.mongodb.net/pizzaria?retryWrites=true', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    return next();
});

//permite a interação com arquivos JSON
app.use(express.json());
//Permite envio de arquivos
app.use(express.urlencoded({ extend: true}));

app.use(require('./routes'));

//Porta de escuta
server.listen(process.env.PORT || 3333);