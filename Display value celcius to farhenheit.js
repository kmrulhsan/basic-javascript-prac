// const celsiusFormula = (0 × 9/5) + 32 ;
// const farhenheitFormula = (32 − 32) × 5/9;

tempConvert (100,37);

function tempConvert (fahrenheitValue, celciusValue){
    const fahrenheitConvert =  (celciusValue * 9/5) + 32 ;
    console.log (fahrenheitConvert);    

    const celciusConvert = (fahrenheitValue - 32) * (5/9);
    console.log (celciusConvert);
}