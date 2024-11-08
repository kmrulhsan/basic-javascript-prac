// let hour = 20;

// if (hour >= 6 && hour <12){
//     console.log("Good morning");
// }
// else if (hour >= 12 && hour <18){
//     console.log("Good afternoon");
// }
// else{
//     console.log('Good evening');
// }

//switch case
// let role = 'admin' ;

// switch (role){
//     case 'admin':
//         console.log('Admin User');
//         break;
//     case 'guest':
//         console.log('Guest User');
//         break;
//     default:
//         console.log('Unknown User');
// }

//for loop

// for (let i=1; i<=5; i++){
//     if(i%2 != 1) console.log(i);
// }

//while loop
// let i = 0;
// while (i<=5){
//     if (i%2 !==1) console.log(i);
//     i++;
// }

//do while loop
// let i = 0;
// do {
//     if (i%2 !==1) console.log(i);
//     i++;
// } while(i<=5);

//for in
// const person ={
//     name: 'kamrul',
//     age: 20
// };

// for(let key in person){
//     console.log(key, person[key]);
// }
// const colors = ['blue', 'red', 'white'];
// for(let index in colors)
//     console.log(index, colors[index]);

// //for of
// for(let color of colors)
//     console.log(color);

//ex-1
// let numbers = max(1,2);
// console.log(numbers);

// function max (a,b){
//      return (a>b) ? a : b;
// }

//ex-2
// let points = isLandscape(10,20);
// console.log(points);

// function isLandscape (width,height){
//     if(width>height) return "landscape";
//     else return "portrait";
// }

//ex-3 fizzbuzz
// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input){
//     if(typeof input !== 'number')
//         return NaN;
//     if(input%3 === 0 && input%5 === 0)
//         return "fizzbuzz";
//     if(input%3 === 0)
//         return "fizz";
//     if(input%5 === 0)
//         return "Buzz";
//     else return input;
// }

//ex-4
// checkSpeed(130);

// function checkSpeed (speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed<speedLimit+kmPerPoint){
//         console.log("speed is ok");
//         return ;
//     }
//     const points = Math.floor((speed-speedLimit)/kmPerPoint);
//     if (points>=12)
//         console.log("License suspended");
//     else
//         console.log('points',points);
// }

//ex-5
showLimit(10)
function showLimit(limit){
    for(let i=0; i<=limit; i++){
        const message = (i%2 === 0)? 'EVEN':'ODD'
        console.log(i,message);
    }
}
