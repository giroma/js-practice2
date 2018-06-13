const isPalindrome = (word) => {
  return word == word.split('').reverse().join('')
}
isPalindrome('argra')
