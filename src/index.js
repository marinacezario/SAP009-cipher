import cipher from './cipher.js';

const chave = document.getElementById("chave")
const stringEncode = document.getElementById("mensagemCodificar")
const stringDecode = document.getElementById("mensagemDecodificar")
const botaoDecode = document.getElementById("botaoDecodificar").addEventListener("click", decodificar)
const botaoEncode = document.getElementById("botaoCodificar").addEventListener("click", codificar)
let mensagemErro = "Ops... Algo deu errado. Por favor, preencha os campos corretamente!"

//chamar todos os ids (deslocamento, mensagens e botoes)
//arrumar 

function inserirDados(){
    if(document.getElementById("remetente").value != "" &&
    document.getElementById("destinatario").value != "" &&
    document.getElementById("mensagemCodificar").value != ""){
        alert("")
    }else{
        alert("")
    }
}

console.log(cipher);

//chamar botão codificar
//chamar botão decodificar
//adicionar evento botao codificar
//adicionar evento botao decodificar