using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using SistemaVendas.DAL;
using SistemaVendas.Entities;
using SistemaVendas.Models;


namespace SistemaVendas.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        
        protected ApplicationDbContext Repositorio;
        [ActivatorUtilitiesConstructor]
        public HomeController(ApplicationDbContext repositorio)
        {
            Repositorio = repositorio;
        }

        public IActionResult Index()
        {
            ////CREATE
            //    Usuario usuario = new Usuario()
            //    {
            //        Nome = "David",
            //        Email = "teste@teste.com",
            //        Senha = "123456"
            //    };

            //    Repositorio.Usuario.Add(usuario);
            //    Repositorio.SaveChanges();

            ////READ
            //IEnumerable<Usuario> lista = Repositorio.Usuario.ToList();
            //return View(lista);

            ////FINDONE
            //Usuario objUsuario = Repositorio.Usuario.Where(x => x.Cod == 3).FirstOrDefault();
                ////UPDATE
                //objUsuario.Nome = "Juan";
                //Repositorio.Entry(objUsuario).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                //Repositorio.SaveChanges();
                ////DELETE
                //Repositorio.Attach(objUsuario);
                //Repositorio.Remove(objUsuario);
                //Repositorio.SaveChanges();

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
