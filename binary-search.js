const array = [0,1,2,3,4,5,6,7,8,9]

const search = (searchData, numberToFind) => {
  let min = 0
  let max = searchData.length - 1
  let mid = Math.floor(searchData.length/2)

  while (min <= max) {
    console.log(min, mid, max);
    if (searchData[mid] === numberToFind) {
      console.log('found it!!!', searchData[mid]);
      return searchData[mid]
    }
    else if (numberToFind > searchData[mid]) {//go higher
      console.log('higher');
      min = mid + 1
      mid = Math.floor((min + max)/2)
    }
    else{ //go lower
      console.log('lower');
      max = mid - 1
      mid = Math.floor((min + max)/2)
    }
  }
  console.log('number not found');
}
search(array, 9)
