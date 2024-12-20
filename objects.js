// oject oriented programming (oop)
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y:1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();

//Factory Functions

// function createCircle(radius){
//     return{
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);
// const circle2 = createCircle(2);
// console.log(circle2);
// circle1.draw();

// camel notation = oneTwoThreeFour
// pascal notation = OneTwoThreeFour

// constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(draw){
//         console.log('draw');
//     }
// }

// const circle1 = new Circle(1);
// console.log (circle1);
// circle1.draw(2);

// const circle = {
//     radius : 1
// };

// circle.color = 'Red';
// circle.draw = function(){}

// delete circle.draw;
// delete circle.color;

// console.log(circle);

// // hwo to view properties of a object
// const circle = {
//     radius : 1,
//     draw (){
//         console.log('draw');
//     }
// }

// for( let key in circle)
//     console.log (key, circle[key]);

// for(let key of Object.keys(circle))
//     console.log(key);

// for(let entry of Object.entries(circle))
//     console.log(entry);

// if ('' in circle) console.log('yes');

// cloning an object
// const another = {};
// for (let key in circle)
//     another [key] = circle [key];

// const another = Object.assign({}, circle);

// const another = { ...circle};

// console.log (another);

//string properties 
// math properties to check in MDN

//template literals
// const name = 'john';
// const message = `Hi ${name}
// how are you

// from boss`;

// console.log(message);

// set date
const now = new Date();
const date1= new Date('May 11 2022 09:00');
const date2 = new Date(2018, 4, 11, 9);
now.setFullYear(2020);
console.log(now);