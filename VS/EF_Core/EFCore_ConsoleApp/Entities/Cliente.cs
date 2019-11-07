using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace EFCore_ConsoleApp.Entities
{
    public class Cliente
    {
        [Key]
        public int cod_clie { get; protected set; }
        public string razao_soc_clie { get; set; }
        public string cpf_cnpj_clie { get; set; }
        public string rg_ie_clie { get; set; }
        public string endereco_comr{ get; set; }
        public string bairro_comr { get; set; }
        public string cep_comr { get; set; }
        
    }

}
