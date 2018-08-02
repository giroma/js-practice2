
// check if there are exactly 3 question marks between every pair of two numbers that add up to 10

let str = "acc?7??sss?3rr1??????5"

function question(){
  let countQ = 0
  let firstNum = 0
  for (char of str){
    console.log(char, !isNaN(char))
    if (!isNaN(char)) {
      console.log('number')
      if(10-firstNum == char && countQ >= 3){
        console.log('add to ten and count > 2');
        return true
      }
      firstNum = +char
      countQ = 0
    }
    if(char === '?'){
      countQ++
    }
  }
  return false
}
console.log(question())
