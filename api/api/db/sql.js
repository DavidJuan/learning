var sql = require("mssql");

var config = {
      server: "localhost",
      dialect: "mssql",
      dialectOptions:{
          instanceName: "SQLEXPRESS"
      },
      database: "ProjetoWeb",
      authentication: {
        type: "default",
        options: {  
          userName: "sa",
          password: "web123",
          encrypt: false
        }
      }
    };

function request(query) {
    return new Promise((resolve,reject)=>{
        new sql.ConnectionPool(config).connect().then(pool=>{
            return pool.request().query(query)
        }).then(result => {
            sql.close();
            resolve(result.recordsets)
        }).catch( err =>{
            sql.close();
            reject(err);
        })
    });
}

module.exports.request = request;