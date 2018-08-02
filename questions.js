
// check if there are exactly 3 question marks between every pair of two numbers that add up to 10

let str = "acc?7??sss?3rr1??????5"

function question(){
  let countQ = 0
  let firstNum = 0
  for(let i = 0; i<str.length;i++){
    console.log(str[i], !isNaN(str[i]))
    if (!isNaN(str[i])) {
      console.log('number')
      if(10-firstNum == str[i] && countQ >= 3){
        console.log('add to ten and count > 2');
        return true
      }
      firstNum = +str[i]
      countQ = 0
    }
    if(str[i] === '?'){
      countQ++
    }
  }
  return false
}
console.log(question())
