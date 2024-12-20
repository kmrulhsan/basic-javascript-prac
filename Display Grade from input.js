const gradeAPlus = 'A+';
const gradeA = 'A';
const gradeB = 'B';
const gradeC = 'C';
const gradeF = 'F';

function showGrade (number){
    if (number <= 100 && number >= 80){
        return gradeAPlus;
    }
    if (number <= 79 && number >= 60){
        return gradeA;
    }
    if (number <= 59 && number >= 40){
        return gradeB;
    }
    if (number <= 39 && number >= 33){
        return gradeC;
    }
    if (number <= 32 && number >= 0){
        return gradeF;
    }
    else return 'Invalid grade entry';
}

console.log(showGrade(33));