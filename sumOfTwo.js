const arrayOfNumbers = [4,5,6,45,3,2,8,7,99,6,4,3,23,11]

const twoNumSum = (array, number) => {
  for (var i = 0; i < array.length; i++) {
    console.log('i',i);
    console.log('number',array[i]);
    const leftover = number - array[i]
    console.log('leftover',leftover);
    const tempArray = array.slice('')
    tempArray.splice(i,1)
    console.log(tempArray);
    if (tempArray.includes(leftover)) {
      return true
    }
  }
  return false
}

console.log(twoNumSum(arrayOfNumbers, 35))
