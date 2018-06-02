let isPrime = (number) => {
  if (number <= 1 || !Number.isInteger(number)) {
    return 'bad number'
  }
  for (var i = 2; i < number; i++) {
    console.log(number%i);
    if (number%i === 0) {
      return 'not prime'
    }
  }
  return 'is prime'
}
console.time('prime')

console.log(isPrime(1299807));

console.timeEnd('prime')
