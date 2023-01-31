
const cipher = {
//função codificar
  encode: function (offset, string){
    //colocar erro
    if(offset !== Number || string !== []){
      throw new TypeError();
    }
    let resultadoEncode = ""; 
    //fazer com que a função analise letra por letra da mensagem com o for
    for (let i = 0; i < string.lenght; i++) {
          //buscar o numero na posição de cada letra 
      const letraEncode = string.charCodeAt(i);
      if (letraEncode >= 65 && letraEncode <=90) {
        encode = ((letraEncode - 65 + offset) % 26) + 65;

        result = resultadoEncode + String.fromCharCode(encode);
      }//else if(letraEncode <= 64 || letraEncode >= 91){
      //}
    }
    //console.log(resultadoEncode);
    return resultadoEncode,
  }
}
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
export default cipher;