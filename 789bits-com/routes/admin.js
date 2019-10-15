const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Contato.js")
const Contato = mongoose.model("contatos")

    router.get('/',(req,res)=>{
        res.render('admin')
    })

    router.get('/contato',(req,res)=>{
        Contato.find().sort({date:"desc"}).then((contatos) => {
            res.render('admin/contatos',{contatos: contatos})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar as mensagens")
            res.redirect("/admin")
        })
        
    })

    router.get('/contato/add',(req,res)=>{
        res.render('admin/addcontato')
    })

    router.post('/contato/new',(req,res)=>{
        //array que guarda os erros
        var erros = []
        //tratando valores vazios
        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome inválido"})
        }
        if (!req.body.contato || typeof req.body.contato == undefined || req.body.contato == null){
            erros.push({texto: "Contato inválido"})
        } else if(req.body.contato.length < 5){
            erros.push({texto: "O Contato tem poucos caracteres"})
        }
        if (!req.body.mensagem || typeof req.body.mensagem == undefined || req.body.mensagem == null){
            erros.push({texto: "Mensagem inválida"})
        } 
        
        //renderizando a pagina novamente com os erros caso tenha algum
        if (erros.length > 0){
            res.render("admin/addcontato", {erros: erros})
        }else{
            //adicionando ao mongo caso esteja certo
            const newContato = {
                nome: req.body.nome,
                tipoContato: req.body.tipoContato,
                contato: req.body.contato,
                mensagem: req.body.mensagem
            }
            new Contato(newContato).save().then(() =>{
                console.log("Mensagem salva com sucesso!!")
                req.flash("success_msg", "Mensagem salva com sucesso")
                res.redirect("/admin/contato")
                
            }).catch((err) =>{
                console.log("Erro ao salvar mensagem: " + err)
                req.flash("error_msg", "Houve um erro ao salvar a mensagem, Tente novamente")
                res.redirect("/admin")
            })
        
        }
        
    })

module.exports = router