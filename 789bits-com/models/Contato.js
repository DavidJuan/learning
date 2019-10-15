const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Contato = new Schema({
    nome: {
        type: String,
        required: true
    },
    tipoContato: {
        type: String,
        required: true
    },
    contato: {
        type: String,
        required: true
    },
    mensagem: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


mongoose.model("contatos", Contato);