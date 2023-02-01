
const cipher = {
//função codificar
  encode: function (offset, string){
    //colocar erro  
    if(typeof string !== "string"){
      throw new TypeError();
    }

    let resultadoEncode = ""; 
    string = string.toUpperCase();

    //fazer com que a função analise letra por letra da mensagem com o for
    for (let i = 0; i < string.length; i++) {
      const letraEncode = string.charCodeAt(i); //buscar o numero na posição de cada letra 
      
      if (letraEncode >= 65 && letraEncode <=90) {
        resultadoEncode += String.fromCharCode (((letraEncode - 65 + offset) % 26) + 65);

      }//else if(letraEncode <= 64 || letraEncode >= 91){
      //resultadoEncode += string.charAt(i);
      //}
    }
    return resultadoEncode;
  },

  decode: function (offset, string){
    //colocar erro  
    if(typeof string !== "string"){
      throw new TypeError();
    }

    let resultadoDecode = ""; 
    string = string.toUpperCase();

    //fazer com que a função analise letra por letra da mensagem com o for
    for (let i = 0; i < string.length; i++) {
      const letraDecode = string.charCodeAt(i); //buscar o numero na posição de cada letra 
      
      if (letraDecode >= 65 && letraDecode <=90) {
        resultadoDecode += String.fromCharCode (((letraDecode - 90 - offset) % 26) + 90);

      }//else if(letraEncode <= 64 || letraEncode >= 91){
      //resultadoEncode += string.charAt(i);
      //}
    }
    return resultadoDecode;
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