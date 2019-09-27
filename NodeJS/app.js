
// var http = require ("http");

// http.createServer(function(req, res){

//     res.end("Ola");

// }).listen(8099);

// console.log("Servidor Rodando");

const express = require("express"); 
const app = express();
var path = require("path");


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
    res.send("Minha pagina sobre");
})

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu Blog");
})

app.get("/ola/:cargo/:nome", function (req, res) {
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo é: " + req.params.cargo + "</h2>");
})

app.listen(8099, function(){
    console.log("Servidor Rodando na url http://localhost:8099");
});


