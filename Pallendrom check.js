function palindromeCheck (num){
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    if (result === numStr){
      return 'Palindrome number';
    } 
    else return 'not palindrome';
}

console.log(palindromeCheck(122));