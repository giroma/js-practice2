// You're given strings J representing the types of stones that are jewels,
// and S representing the stones you have.
// Each character in S is a type of stone you have.
// You want to know how many of the stones you have are also jewels.

var J = 'abx'
var S = 'aAAbbbb'

var numJewelsInStones = function(J, S) {
  var count = 0
    for (letter of J) {
      var re = new RegExp(letter,"g");
      var result = S.match(re)
      if (result !== null) {
        count += result.length
      }
    }
    console.log(count);
    return count
};
numJewelsInStones(J,S)
