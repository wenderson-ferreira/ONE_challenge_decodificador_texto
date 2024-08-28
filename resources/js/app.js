/**
 * Script com a lógica da aplicação
 * @author: Wenderson Machado Ferreira
 * Data: 27/08/2024
 */


//Declaração de variáveis globais.
let mensagem = "";

/**
 *  Função responsável por limpar a caixa de texto ao receber o foco do usuário.
 */
function limparTexto(){
    let caixaTexto = document.querySelector("textarea");
    caixaTexto.innerHTML = "";
}

/**
 *  Função responsável por obter a mensgaem digitada e transformar em um array de string.
 * @returns Array texto (string)
 */
function lerTexto(campo) {
    let campoTexto = document.querySelector(campo);
    let texto = Array.from(campoTexto.value);
    return texto;
}

/**
 *  Função responsável por receber o texto da caixa de texto e criptografar o mesmo.
 */
function criptografar() {
   let texto = lerTexto("textarea");

   if(isTextoValido(texto) == true){
       let mensagemEncriptada = encriptarTexto(texto);
       console.log(mensagemEncriptada); 

       const campoConteudoEstatico =  document.getElementById("conteudo_estatico");
       campoConteudoEstatico.style.display = 'none';

       const campoConteudoDinamico =  document.getElementById("conteudo_dinamico");
       campoConteudoDinamico.style.display = 'block';

       let campoTextoCriptoo =  document.getElementById("texto_cripto");
       campoTextoCriptoo.innerHTML = mensagemEncriptada;
   }
}

/**
 *  Função responsável por encriptar o texto recebido.
 */
function encriptarTexto(texto) {
    let mensagemArray = [];
    let mensagem = "";
    for( i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            mensagemArray.push("enter");
        } else if(texto[i] == "i"){
            mensagemArray.push("imes");
        } else if(texto[i] == "a"){
            mensagemArray.push("ai");
        } else if(texto[i] == "o"){
            mensagemArray.push("ober");
        }  else if(texto[i] == "u"){
            mensagemArray.push("ufat");
        } else {
            mensagemArray.push(texto[i]);
        }
        mensagem = mensagem.concat(mensagemArray[i]);
    }
    return mensagem;
}

/**
 *  Função responsável por receber o texto da caixa de texto e descriptografar o mesmo.
 */
function descriptografar() {
    let texto = lerTexto("textarea");
    console.log(texto);
 
    if(isTextoValido(texto) == true){
        let mensagemEncriptada = decriptarTexto(texto);
        console.log(mensagemEncriptada); 
 
        const campoConteudoEstatico =  document.getElementById("conteudo_estatico");
        campoConteudoEstatico.style.display = 'none';
 
        const campoConteudoDinamico =  document.getElementById("conteudo_dinamico");
        campoConteudoDinamico.style.display = 'block';
 
        let campoTextoCriptoo =  document.getElementById("texto_cripto");
        campoTextoCriptoo.innerHTML = mensagemEncriptada;
    }
 }

 /**
 *  Função responsável por decriptar o texto recebido.
 */
function decriptarTexto(texto) {
    let mensagemArray = [];
    let mensagem = "";
    for( i = 0; i < texto.length; i++){
        if(texto[i] == "enter"){
            mensagemArray.push("e");
        } else if(texto[i] == "imes"){
            mensagemArray.push("i");
        } else if(texto[i] == "ai"){
            mensagemArray.push("a");
        } else if(texto[i] == "ober"){
            mensagemArray.push("o");
        }  else if(texto[i] == "ufat"){
            mensagemArray.push("u");
        } else {
            mensagemArray.push(texto[i]);
        }
        mensagem = mensagem.concat(mensagemArray[i]);
    }
    return mensagem;
}


/**
 *  Função responsável por validar letras maiúsculas, acentos
 * @returns true | false
 */

function isTextoValido(texto) {
    var pattern = new RegExp(
      "^(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if (!texto || texto.length === 0) {
        alert("Informe o texto para prosseguir.");
        return false;
    }
    if (pattern.test(texto)) {
        alert("O texto não pode conter letras maiúsculas.");
        return false;
    } else {
        return true;
    }
    return;
  }
