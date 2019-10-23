//API SINTEGRA
    let botao = document.querySelector("#consulta")

    botao.addEventListener('click', function(){
        let cnpj = document.querySelector("#cnpj").value
        let api = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`
        let request = new XMLHttpRequest();

        request.open('GET', api)

        request.onload = function(){
            console.dir(JSON.parse(request.responseText))
            let dados = JSON.parse(request.responseText)

            let nome = document.querySelector("#nome")
            nome.innerHTML = dados.nome

            let cep = document.querySelector("#cep")
            cep.innerHTML = dados.cep

            let logradouro = document.querySelector("#logradouro")
            logradouro.innerHTML = dados.logradouro

            let numero = document.querySelector("#numero")
            numero.innerHTML = dados.numero

            let bairro = document.querySelector("#bairro")
            bairro.innerHTML = dados.bairro

            let municipio = document.querySelector("#municipio")
            municipio.innerHTML = dados.municipio

            let uf = document.querySelector("#uf")
            uf.innerHTML = dados.uf

            

        }

        request.send()

        
    })






function telefone_validation(telefone) {
    //retira todos os caracteres menos os numeros
    telefone = telefone.replace(/\D/g, '');
  
    //verifica se tem a qtde de numero correto
    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;
  
    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;
  
    //verifica se não é nenhum numero digitado errado (propositalmente)
    for (var n = 0; n < 10; n++) {
        //um for de 0 a 9.
        //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
        //caractere a ser repetido
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }
    //DDDs validos
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];
    //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;
  
    //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
    //ter 8 caracteres, após isso somente numeros de telefone e radios (ex. Nextel)
    //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
    //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
    //validados corretamente após esse período.
    //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
    //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
    //Caso queira, em 2017, é só tirar o if.
    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;
  
    //se passar por todas as validações acima, então está tudo certo
    return true;
  }
  
  var telefone = document.getElementById("telefone")
  
  telefone.onblur = telefone_validation();
  
   //Funções de Inputs Especiais //
  // Object.prototype.setEvents = function () {
  /*Object.defineProperty(Object.prototype.setEvents, "key" , {value: function () {
    var keyCodesP = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
        keyCodesE = [9, 35, 36, 37, 39, 45],
        inputType = this.getAttribute("type"),
        onBlur = this.onblur,
        cursor, i;
  
        this.telefone = function () {
          var maxlength = 11;
      
          function format(value) {
            var newValue = "";
      
            for (i = 0; i < value.length; i++) {
              if (newValue.length === 0) {
                if (newValue.length <= cursor) {
                  cursor += 1;
                }
      
                newValue += "(";
              } else if (newValue.length == 3) {
                if (newValue.length <= cursor) {
                  cursor += 2;
                }
      
                newValue += ") ";
              } else if ((value.length < 11 && newValue.length == 9) || (value.length == 11 && newValue.length == 10)) {
                if (newValue.length <= cursor) {
                  cursor += 1;
                }
      
                newValue += "-";
              }
      
              newValue += value.charAt(i);
            }
      
            return newValue;
          }
      
          this.setAttribute("placeholder", "(12) 3456-7890");
      
          this.onkeydown = function (event) {
            var keyCode = window.Event ? event.which : event.keyCode,
                value = this.value,
                selectionStart = this.selectionStart;
      
            if (event.ctrlKey === true) {
              return true;
            }
      
            cursor = selectionStart - (value.substr(0, selectionStart).length - value.substr(0, selectionStart).toString().replace(/[^\d]+/g, "").length);
            value = value.toString().replace(/[^\d]+/g, "");
            keyCode = keyCode >= 96 && keyCode <= 105 ? keyCode - 48 : keyCode;
      
            if (keyCode == 8 || keyCode == 46) {
              cursor -= keyCode == 8 ? 1 : 0;
              value = value.substr(0, cursor) + value.substr(cursor + 1);
      
              this.value = format(value);
              this.selectionStart = cursor;
              this.selectionEnd = cursor;
      
              return false;
            }
      
            if (inArray(keyCode, keyCodesE)) {
              return true;
            }
      
            if (value.length < maxlength && inArray(keyCode, keyCodesP)) {
              value = value.substr(0, cursor) + String.fromCharCode(keyCode) + value.substr(cursor, value.length);
              cursor += 1;
      
              this.value = format(value);
              this.selectionStart = cursor;
              this.selectionEnd = cursor;
      
              return false;
            }
      
            return false;
          };
      
          this.onpaste = function (event) {
            var clipboardData = window.clipboardData ? window.clipboardData.getData("text") : event.clipboardData.getData("text/plain"),
                value = this.value,
                selectionStart = this.selectionStart;
      
            clipboardData = clipboardData.toString().replace(/[^\d]+/g, "");
            cursor = selectionStart - (value.substr(0, selectionStart).length - value.substr(0, selectionStart).toString().replace(/[^\d]+/g, "").length);
            cursor += clipboardData.length;
      
            value = value.toString().replace(/[^\d]+/g, "");
            value = value.substr(0, cursor) + clipboardData + value.substr(cursor, value.length);
      
            if (value.length > maxlength) {
              value = value.substr(0, maxlength);
            }
      
            this.value = format(value);
            this.selectionStart = cursor;
            this.selectionEnd = cursor;
      
            return false;
          };
      
          this.onblur = function () {
            var value = this.value;
      
            if (value && value.length != 14 && value.length != 15) {
              alert("O número \"" + value + "\" é inválido.");
              this.value = "";
              setTimeout(function () {
                this.focus();
              }, 0);
      
              return false;
            }
      
            if (onBlur) {
              onBlur.call(this);
            }
          };
        };
        this[inputType]();
      }, enumerable: false})
      window.addEventListener("load", function () {
        var selectors = ["input[type=data]",
                         "input[type=numero]",
                         "input[type=telefone]",
                         "input[type=cnpj]",
                         "input[type=cpf]",
                         "input[type=moeda]"];
      
        (function () {
          var i;
      
          for (i = 0; i < this.length; i++) {
            this[i].setEvents();
          }
        }).call(document.querySelectorAll(selectors));
      }, false);
      // Fim das Funções de Inputs Especiais //
      
      // ====================================================================== //
      
      function inArray(value, array) {
        var i;
      
        for (i = 0; i < array.length; i++) {
          if (value == array[i]) {
            return true;
          }
        }
      
        return false;
      } // Fim da função inArray
  
      //remove caracteres
      //  function limpaEspaco(vlr) {
      //   // var vlr = document.getElementById(This).value
      //   while(vlr.indexOf("  ") != -1)
      //   vlr = vlr.replace("  ", " ");
      //   }
  
  
      // function capturar(campo) {
      //   document.getElementById("nome").value = removeCaracteres(trim(campo.value)); 
      //  }  		
       
      //  function trim(e){ 
      //  espacos = /\s/g; 
      //  return e.replace(espacos, "");
      //  }  		
       
      //  function removeCaracteres(e){ 
      //  remove = /á|é|í|ó|ú/g;  // adicione os caracteres indesejáveis
      //  return e.replace(remove, "");
      //  }*/