const db = require('./Db')

const Post = db.sequelize.define('postagens',{
    titulo:{
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;

//Forçar a criação da tabela, comentar/excluir após a criação para não correr o risco de apagar toda tabela
//Post.sync({force: true});