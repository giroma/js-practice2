//Find all the elements that appear twice in this array.
var nums = [4,3,2,7,8,2,3,1]
var findDuplicates = function(nums) {
  if(nums.length === 0) return [];
    var ans =[]
    var comArray = {}
    for(var i = 0; i < nums.length; i++){
      let num = nums[i]
        if(num in comArray){
            ans.push(num);
        } else {
            comArray[num] = i
        }
    }
    console.log(ans);
    return ans;
};
findDuplicates(nums)
