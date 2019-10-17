const moongoose = require("mongoose")
const Schema = moongoose.Schema

const Assunto = new Schema({
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
    data:{
        type: Date,
        default: Date.now()
    }
})

moongoose.model('assuntos', Assunto)