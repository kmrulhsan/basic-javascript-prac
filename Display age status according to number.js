const childStatus = 'You are a Child';
const teenStatus = 'You are a teen';
const adultStatus = 'You are a adult';
const oldStatus = 'You are Old';

console.log (ageStatus(18));

function ageStatus (age){
    if ( age >= 0 && age <= 5){
        return childStatus;
    }
    if ( age >= 5 && age <=17){
        return teenStatus;
    }
    if ( age >= 18 && age <= 35){
        return adultStatus;
    }
    if ( age >= 36 && age <= 100){
        return oldStatus;
    }
    else return 'Please input a proper age number';

}