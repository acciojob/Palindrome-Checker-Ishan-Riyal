// complete the given function

function palindrome(str){
 const reverse = str.split('').reverse().join('');
 return str === reverse ? true : false;
}

module.exports = palindrome
