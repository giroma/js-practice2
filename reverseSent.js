let reverse = (word) => {
  const length = word.length
       let revWord = []
       for(let i = length-1; i >= 0; i--){
           revWord.push(word[i])
       }
       return revWord.join('')
   }

const sentence = 'one flew over the cookoos nest'

let reverseAll = (sentence) => {
    sentence = sentence.split(' ')
    console.log(sentence);
    let word = []
    let newSentence = []
    for (word of sentence){
      newSentence.push(reverse(word))
    }
    console.log(newSentence.join(' '));
}
reverseAll(sentence)
