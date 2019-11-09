using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaVendas.Entities
{
    public class Venda
    {
        [Key]
            public int? Cod { get; set; }

        [ForeignKey("Cliente")]
            public int CodCliente { get; set; }
            public Cliente Cliente { get; set; }

        [ForeignKey("Usuario")]
            public int CodUsuario { get; set; }
            public Usuario Usuario { get; set; }

        public decimal Total { get; set; }

        public DateTime Data { get; set; }

        public ICollection<VendaProduto> Produto { get; set; }
    }
}
