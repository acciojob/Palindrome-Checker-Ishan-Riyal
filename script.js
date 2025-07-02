// complete the given function

function palindrome(str){
 const reverse = str.split('').reverse().join('');
 return str.toLowerCase() === reverse.toLowerCase() ? true : false;
}

module.exports = palindrome
