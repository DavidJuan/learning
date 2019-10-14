//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
//Configs
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