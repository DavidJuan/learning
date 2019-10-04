
//Configurando o Mongoose
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprender", { useNewUrlParser: true , useUnifiedTopology: true }).then( () =>{
    console.log("MongoDB conectado com sucesso")
}).catch(erro => {
    console.log("Houve uma falha na conexão: " + erro)
})

//Models
    //Usuarios
    const UserSchema = mongoose.Schema({
        nome:{
            type: String,
            require: true

        },
        sobrenome:{
            type: String,
            require: true

        },
        email:{
            type: String,
            require: true
        },
        idade:{
            type: String,
            require: true
        },
        pais:{
            type: String
            
        }
    })
//Collection
    mongoose.model('users', UserSchema)

    new UserSchema({
        nome: 'David',
        sobrenome: 'Juan',
        email: 'teste@teste.com',
        idade: 28,
        pais: 'Brasil'
    }).save().then().catch