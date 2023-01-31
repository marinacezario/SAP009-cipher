import cipher from './cipher.js';

//declarar todas as variáveis - deslocamento, 2 mensagens e 2 botoes
const deslocamento = document.getElementById("chave");
const mensagemEncode = document.getElementById("mensagemCodificar").value.toUpperCase();
const botaoEncode = document.getElementById("botaoCodificar");
const mensagemDecode = document.getElementById("mensagemDecodificar");
const botaoDecode = document.getElementById("botaoDecodificar").value.toUpperCase();

//adicionar evento para os botoes
botaoEncode.addEventListener("click", acaoCodificar);
botaoDecode.addEventListener("click", acaoDecodificar);

//chamar função para botão de codificação
function acaoCodificar(){
  mensagemDecode.value = cipher.encode(parseInt(deslocamento.value),mensagemEncode.value);
}

//chamar funçao para botão de decodificação
function acaoDecodificar(){
  mensagemDecode.value = cipher.encode(parseInt(deslocamento.value),mensagemEncode.value);
}

//console.log(cipher);

//if(mensagemCodificar.value ==="" || chave.value ===""){
//alert("Preencha a chave e mensagem corretamente para codificar!")
//}else{
//deslocamento = Number(chave.value);
//stringEncode = mensagemCodificar.value;
//}