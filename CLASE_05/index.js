function findLongestWord(text) {
   const words = text.split(" ");
   
      let longestWord = ''; // Inicializar la palabra más larga
      for( let num =0; num <words.length; num++){
        let palabra_act=words[num];

        if (palabra_act.length >longestWord.length) {

            longestWord =palabra_act;            
        }

      }

      return longestWord;

}
const text = "JavaScript es un lenguaje de programación increíble para aprender."

console.log(findLongestWord(text));