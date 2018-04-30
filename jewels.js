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
