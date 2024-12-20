const day1 = 'Saturday';
const day2 = 'Sunday';
const day3 = 'Monday';
const day4 = 'Tuesday';
const day5 = 'Wednesday';
const day6 = 'Thursday';
const day7 = 'Friday';

function weekDays(input){
    if (input === 1){
        return day1;
    }
    if (input === 2){
        return day2;
    }
    if (input === 3){
        return day3;
    }
    if(input === 4){
        return day4;
    }
    if(input === 5){
        return day5;
    }
    if(input === 6){
        return day6;
    }
    if(input === 7){
        return day7;
    }
    else return 'Invalid Date';
}

console.log(weekDays(5));
