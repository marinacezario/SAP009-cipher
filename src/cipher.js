
const cipher = {
//função codificar
  encode: function (offset, string){
    //colocar erro  
    if(offset !== Number || string !== [] || offset === 0 || string === 0){
      throw new TypeError();
    }
    const resultadoEncode = ""; 
    //fazer com que a função analise letra por letra da mensagem com o for
    for (let i = 0; i < string.lenght; i++) {
      //buscar o numero na posição de cada letra 
      const letraEncode = string.charCodeAt(i);
      if (letraEncode >= 65 && letraEncode <=90) {
        // eslint-disable-next-line no-undef
        encode = ((letraEncode - 65 + offset) % 26) + 65;

        // eslint-disable-next-line no-undef
        result = resultadoEncode + String.fromCharCode(encode);
      }//else if(letraEncode <= 64 || letraEncode >= 91){
      //}
    }
    //console.log(resultadoEncode);
    return resultadoEncode;
  }
}



export default cipher;

//(codigoDaLetra + desloc) % tamDoAlfabeto =>
//((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra => 
//"A".charCodeAt(0)
//string.fromCharCode(72)
//utilizar em um primeiro momento apenas letras minúsculas


//} else if (letter >= 97 && letter <= 122) {
// const calcOffsetLower = ((letter - 97 + offset) % 26) + 97;
//const offsetFinal = String.fromCharCode(calcOffsetLower);
// results.push(offsetFinal);

//} else {
//const othersLetters = String.fromCharCode(letter);
// results.push(othersLetters);
//}

//return results.join("");