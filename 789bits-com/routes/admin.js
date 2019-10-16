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
                email: req.body.email,
                telefone: req.body.telefone,
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

    router.get("/contato/edit/:id", (req,res)=>{
        Contato.findOne({_id:req.params.id}).then((contato) => {
            res.render("admin/editcontato", {contato: contato})
        }).catch((err) => {
            req.flash("error_msg", "Esta mensagem não existe")
            res.redirect('/admin/contato')
            console.log("Esta mensagem não existe" + err)
        })
    })

    router.post("/contato/edit", (req,res)=>{
        Contato.findOne({_id: req.body.id}).then((contato) =>{
               
                contato.nome = req.body.nome
                contato.email = req.body.email
                contato.telefone = req.body.telefone
                contato.mensagem = req.body.mensagem

                contato.save().then(() => {
                    req.flash("info_msg","Edição realizada com sucesso")
                    res.redirect("/admin/contato")
                }).catch((err)=>{
                    req.flash("error_msg","Houve um erro interno ao editar a mensagem")
                    res.redirect("/admin/contato")
                    console.log("Houve um erro interno ao editar a mensagem" + err)
                })
            
        }).catch((err)=>{
            req.flash("error_msg","Houve um erro ao editar a mensagem")
            res.redirect("/admin/contato")
            console.log("Houve um erro ao editar a mensagem" + err)
        })
    })

    router.post("/contato/delete", (req,res)=>{
        Contato.deleteOne({_id: req.body.id}).then(() =>{
            req.flash("warning_msg", "Mensagem deletada com sucesso")
            res.redirect("/admin/contato")
        }).catch((err)=>{
            req.flash("erros_msg","Houve um erro ao deletar a mensagem")
            res.redirect("/admin/contato")
        })
    })

module.exports = router