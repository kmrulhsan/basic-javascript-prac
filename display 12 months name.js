const month1 = 'January';
const month2 = 'February';
const month3 = 'March';
const month4 = 'April';
const month5 = 'May';
const month6 = 'June';
const month7 = 'July';
const month8 = 'August';
const month9 = 'Spetember';
const month10 = 'October';
const month11 = 'November';
const month12 = 'December';


function monthName (input){
    if (input === 1){
        return month1;
    }
    if (input === 2){
        return month2;
    }
    if (input === 3){
        return month3;
    }
    if (input === 4){
        return month4;
    }
    if (input === 5){
        return month5;
    }
    if (input === 6){
        return month6;
    }
    if (input === 7){
        return month7;
    }
    if (input === 8){
        return month8;
    }
    if (input === 9){
        return month9;
    }
    if (input === 10){
        return month10;
    }
    if (input === 11){
        return month11;
    }
    if (input === 12){
        return month12;
    }
    else return 'Invalid Input';
}

console.log(monthName(1));