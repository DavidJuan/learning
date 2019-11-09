using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaVendas.Entities
{
    public class Produto
    {
        [Key]
        public int? Cod { get; set; }

        public string Nome { get; set; }

        public decimal Valor { get; set; }

        public double Qtd { get; set; }

        [ForeignKey("Categoria")]
        public int CodCategoria { get; set; }
        public Categoria Categoria { get; set; }

        [ForeignKey("Usuario")]
        public int CodUsuario { get; set; }
        public Usuario Usuario { get; set; }

        public ICollection<VendaProduto> Vendas { get; set; }
    }
}
