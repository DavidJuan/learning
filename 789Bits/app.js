//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    //const mongoose = require('mongoose')
    const app = express()
//Configs
    //BodyParser
        app.use(bodyParser,urlencoded({extended: true}))
        app.use(bodyParser.json())
    //HandleBars
        app.engine('handlebars',handlebars({defaultLayout: 'main'}))
        app.set('view engine','handlebars')
    //Mongoose
        //
    //
    
//Routes

//Others
    const PORT = 8789
    app.listen(PORT,()=>{
        console.log('Server online')
    })