const express = require("express");
// const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
var app = express();
// const sql = require("mssql");
// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;

//BodyParser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

//Routes
    var routes = require("./api/routers/TestRouter");



routes(app);
const PORT = 3333;
app.listen(PORT, ()=>{
    console.log("API rodando")
})

// config for your database
// var config = {
//     user: 'web',
//     password: 'web123',
//     server: 'localhost\\sqlexpress', 
//     database: 'ProjetoWeb' 
// };

// var Connection = require('tedious').Connection;
// var Request = require('tedious').Request;

// var config = {
//   server: "localhost",
//   dialect: "mssql",
//   dialectOptions:{
//       instanceName: "SQLEXPRESS"
//   },
//   database: "ProjetoWeb",
//   authentication: {
//     type: "default",
//     options: {  
//       userName: "sa",
//       password: "web123",
//       encrypt: false
//     }
//   }
// };

// var connection = new Connection(config);

// connection.on('connect', function(err)
//     {
//         if (err)
//         {
//             console.log(err)
//         }
//         else
//         {
//             queryDatabase()
//         }
//     }
// );

// function queryDatabase()
// {
//     console.log('Reading rows from the Table...');

//     // Read all rows from table
//     var request = new Request(
//         "select *from cliente",
//         function(rowCount)
//         {
//             console.log(rowCount + ' row(s) returned');
//             process.exit();
//         }
//     );

//     request.on('row', function(columns) {
//         columns.forEach(function(column) {
//             console.log("%s\t%s", column.metadata.colName, column.value);
//         });
//     });
//     connection.execSql(request);
// }
// app.get('/', function (req, res) {
   
    

    

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from cliente', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });