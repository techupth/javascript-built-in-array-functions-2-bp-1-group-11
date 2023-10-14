function isPalindrome(string) {
  // Start coding here
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const charArray = string.split('');
  const reversedCharArray = charArray.reverse();
  const reversedString = reversedCharArray.join('');
  return string === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false