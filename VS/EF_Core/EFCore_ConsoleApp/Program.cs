using EFCore_ConsoleApp.Entities;
using System;
using System.Linq;

namespace EFCore_ConsoleApp
{
    class Program
    {
        
        static void Main(string[] args)
        {
            AppDbContext db = new AppDbContext();
            var clientes = db.Cliente.ToList();
            foreach (var item in clientes)
            {
                Console.WriteLine("--------------------");
                Console.WriteLine($"ID: {item.cod_clie}");
                Console.WriteLine($"RAZAO SOCIAL: {item.razao_soc_clie}");
                Console.WriteLine($"RG: {item.cpf_cnpj_clie}");
                Console.WriteLine($"IE: {item.rg_ie_clie}");
                Console.WriteLine($"ENDEREÇO: {item.endereco_comr}");
                Console.WriteLine($"BAIRRO: {item.bairro_comr}");
                Console.WriteLine($"CEP: {item.cep_comr}");
                Console.WriteLine("--------------------");
            }            
        }

        public static void ListProduto()
        {
            AppDbContext db = new AppDbContext();
            Console.WriteLine("--------------------");

            var produtos = db.Produto.ToList();
            //percorrendo a collection para imprimir itens um a um
            foreach (var item in produtos)
            {
                //indicando quais colunas quero mostrar
                Console.WriteLine($"Estoque: {item.ProdutoId} - Nome: {item.Nome} - Preco: {item.Preco}");
            }

            Console.WriteLine("--------------------");
        }

        public static Produto UpdateProduto()
        {
            AppDbContext db = new AppDbContext();

            var produtos = db.Produto.ToList();
            //Selecionando apenas um (o primeiro que encontrar) a mandando para outra variavel
            var produtoSel = produtos.Where(x => x.ProdutoId == 6).First();

            Console.WriteLine("selecionado: " + produtoSel.Nome);

            //alterando atributo da variavel que selecionou apenas um
            produtoSel.Nome = "Caneta Azul";

            //dizendo que quero alterar o item
            db.Entry<Produto>(produtoSel);
            db.SaveChanges();

            Console.WriteLine("alterado: " + produtoSel.Nome);

            return produtoSel;
        }
        

        public static void CreateProduto()
        {
            AppDbContext db = new AppDbContext();            //CREATE
            //atribuindo a variavel o tipo da minha entidade e criando o objeto
            Produto produto = new Produto()
            {
                Estoque = 99,

                Nome = "TESTE FUNÇÃO",

                Preco = 20.50M
            };

            //dizendo ao entity que quer adicionar
            db.Produto.Add(produto);
            //commitando as alterações feitas
            db.SaveChanges();
            Console.WriteLine("Produto cadastrado com sucesso");
        }

        public static void DeleteProduto()
        {
            AppDbContext db = new AppDbContext();

            var produtoSel = UpdateProduto();

            db.Attach(produtoSel);
            db.Remove(produtoSel);
            db.SaveChanges();
        }

    }
}
