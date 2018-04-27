//Longest Substring Without Repeating Characters

var string = "abcdbnhwhdjlllsjfh"
var lengthOfLongestSubstring = function(s) {
  var sArr = s.split('')
  var count = 0
  var maxCount = 0
  var tempArr = []
  while(sArr.length > 0) {
    console.log("array",sArr);
    console.log("TEMP",tempArr);
    for (var letter of sArr){
      if (tempArr.includes(letter)){
        if (count > maxCount) {
          maxCount = count
        }
        sArr.shift()
        count = 0
        tempArr = []
        break
      }else {
        count += 1
        console.log(count);
      }
      tempArr.push(letter)
    }
  }
  return maxCount;
};
console.log(lengthOfLongestSubstring(string))
