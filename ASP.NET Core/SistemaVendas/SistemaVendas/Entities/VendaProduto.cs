using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaVendas.Entities
{
    public class VendaProduto
    {

        public int CodVenda { get; set; }
        public Venda Venda { get; set; }

        public int CodProduto { get; set; }
        public Produto Produto { get; set; }

        public double Qtd { get; set; }

        public decimal ValorUnit { get; set; }

        public decimal ValorTotal { get; set; }

    }
}
