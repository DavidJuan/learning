const express = require('express')
const router = express.Router()

    router.get('/',(req,res)=>{
        res.render('admin/index')
    })

    router.get('/contato',(req,res)=>{
        res.send('Comentarios')
    })

    router.get('/contato/new',(req,res)=>{
        res.render('admin/newcontato')
    })

module.exports = router