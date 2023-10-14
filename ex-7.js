function isPalindrome(string) {
  // Start coding here
}
const cleanString = string.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
const reversedString = cleanString.split('').reverse().join('');
return cleanString === reversedString;

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false