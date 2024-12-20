function detectLeapYear (Year){
    return (Year % 4 === 0)? 'Leap Year': 'Not Leap Year';
}

console.log (detectLeapYear(2011));