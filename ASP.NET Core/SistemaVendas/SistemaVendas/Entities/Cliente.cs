using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaVendas.Entities
{
    public class Cliente
    {
        [Key]
        public int? Cod { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public string CNPJ_CPF { get; set; }

        public string Celular { get; set; }

        [ForeignKey("Usuario")]
        public int CodUsuario { get; set; }
        public Usuario Usuario { get; set; }

        public ICollection<Venda> Vendas { get; set; }
    }
}
