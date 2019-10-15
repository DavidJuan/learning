const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Contato.js")
const Contato = mongoose.model("contatos")

    router.get('/',(req,res)=>{
        res.render('admin/index')
    })

    router.get('/contato/add',(req,res)=>{
        res.render('admin/addcontato')
    })

    router.post('/contato/new',(req,res)=>{
        const newContato = {
            nome: req.body.nome,
            tipoContato: req.body.tipoContato,
            contato: req.body.contato,
            mensagem: req.body.mensagem
        }
        new Contato(newContato).save().then(() =>{
            console.log("Mensagem salva com sucesso!!")
        }).catch((err) =>{
            console.log("Erro ao salvar mensagem: "+err)
        })
        
    })

module.exports = router