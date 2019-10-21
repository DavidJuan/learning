const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Contato.js")
const Contato = mongoose.model("contatos")
require("../models/Assunto.js")
const Assunto = mongoose.model("assuntos")

//CAMINHO PRINCIPAL
    router.get('/',(req,res)=>{
        res.render('admin')
    })
//LISTAGEM DAS MENSAGENS (CONTATOS) RECEBIDAS
    router.get('/contato',(req,res)=>{
        //populate para mandar informações da model "assunto" para a listagem de "contatos"
        Contato.find().populate("assunto").sort({date:"desc"}).then((contatos) => {
            res.render('admin/contatos',{contatos: contatos})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro ao listar as mensagens")
            res.redirect("/admin")
        })        
    })
//GET DA PAGINA DE NOVO CONTATO
    router.get('/contato/add',(req,res)=>{
        //mandando tabela assunto para ser selecionavel na view de addcontato
        Assunto.find().then((assuntos)=>{
            res.render('admin/addcontato',{assuntos: assuntos})
        }).catch((err)=>{
            req.flash("error_msg","Falha ao listar os assuntos"+err)
        })
        
    })
//POST DO NOVO CONTATO NO MONGO
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
            Contato.find().then((contatos) => {
                //TENTATIVA DE NAO APAGAR OS DADOS CASO TENHA ERRO
                //AINDA SEM SUCESSO
                res.render("admin/addcontato", {erros:erros, contatos:contatos})
            })           
        }else{
            //adicionando ao mongo caso esteja certo
            const newContato = {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
                mensagem: req.body.mensagem,
                assunto: req.body.assunto
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
//MOSTRANDO PAGINA DE EDIÇÃO DE CONTATOS
    router.get("/contato/edit/:id", (req,res)=>{
        //requerendo contato pelo id para edição
        Contato.findOne({_id:req.params.id}).then((contato) => {
            res.render("admin/editcontato", {contato: contato})
        }).catch((err) => {
            req.flash("error_msg", "Esta mensagem não existe")
            res.redirect('/admin/contato')
            console.log("Esta mensagem não existe" + err)
        })
    })
//POSTANDO O RESULTADO DO EDIT    
    router.post("/contato/edit", (req,res)=>{
        Contato.findOne({_id: req.body.id}).then((contato) =>{
               
            contato.nome = req.body.nome
            contato.email = req.body.email
            contato.telefone = req.body.telefone
            contato.mensagem = req.body.mensagem
            //ADICIONAR ASSUNTO AQUI

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
//DELETANDO CONTATO
    router.post("/contato/delete", (req,res)=>{
        Contato.deleteOne({_id: req.body.id}).then(() =>{
            req.flash("warning_msg", "Mensagem deletada com sucesso")
            res.redirect("/admin/contato")
        }).catch((err)=>{
            req.flash("erros_msg","Houve um erro ao deletar a mensagem")
            res.redirect("/admin/contato")
        })
    })

    router.get("/assunto/add",(req,res) => {
        res.render("admin/addassunto")
    })


    router.post("/assunto/new",(req,res)=>{
        const newAssunto = {
            titulo: req.body.titulo,
            descricao: req.body.descricao
        }

        new Assunto(newAssunto).save().then(()=>{
            console.log("Assunto salvo com sucesso")
            req.flash("success_msg", "Assunto salvo com sucesso")
            res.redirect("/admin/contato/add")
        }).catch((err)=>{
            console.log("Erro ao salvar assunto"+err)
            req.flash("error_msg","Erro ao salvar assunto"+err)
        })
    })

module.exports = router