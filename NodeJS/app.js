
// var http = require ("http");

// http.createServer(function(req, res){

//     res.end("Ola");

// }).listen(8099);

// console.log("Servidor Rodando");

const express = require("express"); 
const app = express();
var path = require("path");


app.get("/", function (req, res) {
    res.sendfile(path.join(__dirname + "/CV.html"));
});

app.get("/sobre", function (req, res) {
    res.send("Minha pagina sobre");
})

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu Blog");
})

app.listen(8099, function(){
    console.log("Servidor Rodando na url http://localhost:8099");
});


