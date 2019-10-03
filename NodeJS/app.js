const express = require("express"); 
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('./models/Post')

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    
    //Rotas
    app.get('/', function(req, res){
        Post.findAll({order:[['id','ASC']]}).then(function (posts) {
            //passando os posts para a home
            res.render('home', {posts: posts});
        })
        
    })

    app.get('/delete/:id',function (req,res) {
        Post.destroy({where: {'id': req.params.id}}).then(function () {
            res.send("Postagem deletada com sucesso")
        }).catch(function (erro) {
            res.send("Essa postagem nao existe" + erro)
        })
    })

    app.get('/cad',function (req, res) {
        res.render('form')
    })

    app.post('/add', function (req,res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function () {
            res.redirect('/')
        }).catch(function (erro) {
            res.send('Foi encontrado um erro, Detalhe: ' + erro)
        })


        // }).then(function () {
        //     res.send('Post criado com sucesso')
        // }).catch(function (erro) {
        //     res.send('Foi encontrado um erro, Detalhe: ' + erro)
        // })
    })

app.listen(8099, function(){
    console.log("Servidor Rodando na url http://localhost:8099");
});




//app.get("/", function (req, res) {
    //     res.sendFile(__dirname + "/html/index.html");
    // });
    
    // app.get("/sobre", function (req, res) {
    //     res.send("Minha pagina sobre");
    // })
    
    // app.get("/blog", function (req, res) {
    //     res.send("Bem-vindo ao meu Blog");
    // })
    
    // app.get("/ola/:cargo/:nome", function (req, res) {
    //     res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo é: " + req.params.cargo + "</h2>");
    // })

