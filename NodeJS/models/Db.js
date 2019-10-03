const Sequelize = require('sequelize');

// Conexão com BD MySQL
const sequelize = new Sequelize('postapp', 'root', 'web123',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}