let vowelA = 'A';
let haveVowel = 'It is a vowel';
let haveConsonant = 'It is a consonant';

console.log (vowelConsonant('A'));

function vowelConsonant (alphabet){
    if ( 'A' === alphabet || 'E' === alphabet || 'I' === alphabet || 'O' === alphabet || 'U' === alphabet){
        return haveVowel;
    }
    else return haveConsonant;
}