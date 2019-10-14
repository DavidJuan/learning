const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Contato = new.Schema({
    nome:{
        type: String,
        require: true
    },
    contato:{
        type: String,
        require: true
    },
    mensagem:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model("contato", Contato)