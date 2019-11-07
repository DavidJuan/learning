using EFCore_ConsoleApp.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFCore_ConsoleApp
{
    //Herdando Classe do Entity
    public class AppDbContext : DbContext
    {

        //Criando minha referencia da tabela do banco de dados
        public DbSet <Produto> Produto { get; set; }
        public DbSet <Cliente> Cliente { get; set; }
        //connection string para acessar BD
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Indicando que quero usar MSSQL Server como BD
            optionsBuilder.UseSqlServer(
                //Connection String
                @"Server=.\sqlexpress;Database=ProjetoWeb; Integrated Security=True");
}
    }
}
