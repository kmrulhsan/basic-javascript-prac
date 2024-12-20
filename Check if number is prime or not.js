function checkPrimeNum (number){
    if ( number % 2 === 0 ){
        return 'Prime Number';
    }
    else return 'Not Prime Number';
}

console.log (checkPrimeNum(1));