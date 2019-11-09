using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaVendas.Entities
{
    public class Usuario
    {
        [Key]
            public int? Cod { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string Senha { get; set; }

        public ICollection<Produto> Produtos { get; set; }
        public ICollection<Cliente> Clientes { get; set; }
        public ICollection<Venda> Vendas { get; set; }

    }
}
