const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Contato = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        
    },
    telefone: {
        type: String,
        
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