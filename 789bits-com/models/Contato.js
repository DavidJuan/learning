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
    assunto:{
        //PEGANDO ASSUNTO DA TABELA ASSUNTOS
        type: Schema.Types.ObjectId,
        ref: "assuntos",
        required:true
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