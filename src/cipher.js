//função codificar
function cipherEncode(chave, stringEncode) {
  for (let i = 0; i < stringEncode.lenght; i++) {
    const letraEncode = stringEncode.charCodeAt(i);

    console.log(i);
    // more statements
  }
  if (letraEncode >= 65 && letraEncode <=90) {
    const encode = ((letraEncode - 65 + chave) % 26) + 65;
    const resultado = "";    
  }
}

//(codigoDaLetra + desloc) % tamDoAlfabeto =>
//((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra => 
//"A".charCodeAt(0)
//string.fromCharCode(72)
//utilizar em um primeiro momento apenas letras minúsculas

//while (offset < 0) {
  offset += 26
//}
//if (letter >= 65 && letter <= 90) {
 // const calcOffsetUpper = ((letter - 65 + offset) % 26) + 65
  //const offsetFinal = String.fromCharCode(calcOffsetUpper);
 // results.push(offsetFinal);

//} else if (letter >= 97 && letter <= 122) {
 // const calcOffsetLower = ((letter - 97 + offset) % 26) + 97;
  //const offsetFinal = String.fromCharCode(calcOffsetLower);
// results.push(offsetFinal);

//} else {
//const othersLetters = String.fromCharCode(letter);
 // results.push(othersLetters);
//}

//return results.join("");
//export default cipher;