using System;
using System.Collections.Generic;
using System.Text;

namespace EFCore_ConsoleApp.Entities
{
    public class Produto
    {
        public int ProdutoId { get; set; }
        public int Estoque { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }


    }
}
