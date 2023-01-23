import cipher from './cipher.js';

document.getElementById("botaoDecodificar").addEventListener("click", )
document.getElementById("botaoCodificar").addEventListener("click", inserirDados)

function inserirDados(){
    if(document.getElementById("remetente").value != "" &&
    document.getElementById("destinatario").value != "" &&
    document.getElementById("mensagemCodificar").value != ""){
        alert("Prontinho! Você receberá as novidades por e-mail!")
      }else{
        alert("Por favor, preencha os campos nome, e-mail e telefone!")
      }
}

console.log(cipher);

//chamar botão codificar
//chamar botão decodificar
//adicionar evento botao codificar
//adicionar evento botao decodificar