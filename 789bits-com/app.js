//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
    const session = require("express-session")
    const flash = require("connect-flash")
//Configs
    //Sessão
        app.use(session({
            secret: "789bits",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req, res, next) =>{
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next();
        })
    //BodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //HandleBars
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/789bits', {useNewUrlParser: true , useUnifiedTopology: true} ).then(() =>{
            console.log('Conectado ao Mongo')
        }).catch((err) => {
            console.log('Erro ao se conectar: ' + err)
        })
    //Public
        app.use(express.static(path.join(__dirname,'public')))
//Routes
    app.use('/admin',admin)
//Others
    const PORT = 3000
    app.listen(PORT,()=>{
        console.log('Server online')
    })