
//Arrays e Collections
//ARRAY
    // TIPO[] A = new TIPO[3]
//a.length
//COLLECTION
    //List <tipo> A = new List<tipo>()
    //a.add
    //a.count
    //a.contains

using System;
using System.Collections.Generic;
using System.Linq;

namespace console_app
{
    class Program
    {
        static void Main(string[] args)
        {

            List<string> cidades = new List<string>();
            

                cidades.Add("São Paulo");
                cidades.Add("São Jose");
                cidades.Add("São Bernardo");
                cidades.Add("Rio de Janeiro");
                cidades.Add("Floripa");
                cidades.Add("Porto Alegre");
                cidades.Add("Brasilia");
                cidades.Add("Diadema");

            BuscarListaComLinqLambda(cidades, "Ale").ForEach(x => Console.WriteLine(x));
            
            Console.ReadKey();
        }

        public static string BuscarPrimeiroComForEach(List<string> lista, string termo)
        {
            foreach (string item in lista)
            {
                if (item.Equals(termo))
                    return item;
            }
            return null;
        }
        public static List<string> BuscarListaComLinq(List<string> lista, string termo)
        {
            return (from item in lista where item.Contains(termo) select item).ToList();
        }

        public static List<string> BuscarListaComLinqLambda(List<string> lista, string termo)
        {
            return lista.Where(x => x.Contains(termo)).ToList();
        }

    }

}

//string[] a = new string[3];
//var aa = new string[3];
//a[0] = "David";
//a[1] = "Juan";
//a[2] = "Freire";
//Array.Sort(a);

//foreach (string nome in a)
//{
//    Console.WriteLine(nome);
//}

//List<string> a = new List<string>();

//a.Add("David");
//a.Add("Juan");
//a.Add("Freire"); 

//Console.WriteLine(a.Exists(e => e == "David"));