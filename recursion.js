//
// // integers in range (x, y)
//
// range = (start, end) => {
//   if (end - start === 2) {
//     return [start+1]
//   }
//   else {
//     let list = range(start, end-1)
//     list.push(end - 1)
//     return list
//   }
// }
//
// console.log(range(2,9));

// exponent

// exponentCalc = (base, exponent) => {
//   if (exponent === 0) {
//     return 1
//   }
//   else {
//     return base * exponentCalc(base, exponent-1)
//   }
// }
//
// console.log(exponentCalc(5,3))


// iseven = (number) => {
//   if (number === 0) {
//     return true
//   }else if (number === 1) {
//     return false
//   }else {
//     return iseven(number -2)
//   }
// }
// console.log( iseven(25085) )



let data = [1,2,4,5,7,9,66,345,357]
bsearch = (array, number) => {
  console.log('array',array);
  let mid = Math.floor(array.length/2)
  console.log(mid);

  if (array[mid] === number) {
    console.log('found', number);
    return number
  }else if (number < array[mid]) {
    console.log('left');
    array.splice(mid)
    return bsearch(array, number)
  }else if (number > array[mid]) {
    console.log('right');
    array.splice(0,mid+1)
    return bsearch(array, number)
  }
  return 'not found' //gets triggered when array is empty and all if statements cant evaluate
}
console.log( bsearch(data, 66) )
