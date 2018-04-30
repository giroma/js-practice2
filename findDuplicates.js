//Find all the elements that appear twice in this array.
var nums = [4,3,2,7,8,2,3,1]
var findDuplicates = function(nums) {
  if(nums.length === 0) return [];
    var index, ans =[];
    for(var i = 0; i < nums.length; i++){
        index = Math.abs(nums[i]);
        console.log(index);
        console.log(nums);
        if(nums[index-1] < 0){
            ans.push(index);
            console.log('push');
        } else {
            nums[index-1] *= -1;
        }
    }
    console.log(ans);
    return ans;
};
findDuplicates(nums)
