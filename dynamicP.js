//second version with houses in circle
//remember where to start and what to save

var rob = function(nums) {
  function calc(input) {
    let max = 0
    let lastlast = input[0]
    let last = Math.max(input[0], input[1])
    for (let i = 2;i< input.length; i++){
      max = Math.max(lastlast+input[i], last)
      lastlast = last
      last = max
    }
    return max
  }
  let first = nums.pop()
  console.log(nums)
  let max1 = calc(nums)
  nums.push(first)
  nums.shift()
  console.log(nums)
  let max2 = calc(nums)
  return Math.max(max1, max2)

};
let nums = [2,3,1,9,70,100,6,14]
console.log(rob(nums))
