d = {
  "phones":{
    'iphone': '7',
    'android': 'pixel'
},
  "computer": {
    'pc': {
      'lenovo': 'thinkpad',
      'microsoft': 'surface'
    },
    'apple':'mac',
  }
}

let search = (input) => {
  for (var top in input) {
    if (top != 0) {
      console.log(input[top]);
      search(input[top])
    } else {
      return input[top]
    }
  }
}
console.log(search(d));

// for (var top in d) {
//   console.log(top);
// }
