const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'web123',{
    host: "localhost",
    dialect: 'mysql'
})

//postagem

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    },
})

Usuario.create({
    nome: "David",
    sobrenome: 'Juan',
    idade: 28,
    email: 'teste@teste.com.br'
})


//alter user 'USER'@'localhost' identified with mysql_native_password by 'PASSWORD'

// sequelize.authenticate().then(function () {
//     console.log('Conectado com sucesso!!')    
// }).catch(function (erro) {
//     console.log("Falha ao se conectar: " + erro)    
// })