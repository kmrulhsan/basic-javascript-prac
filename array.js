//** adding elements */ 
// const numbers = [ 3, 4 ];

// //end
// numbers.push(5,6);

// //start
// numbers.unshift(1,2);

// //middle
// numbers.splice(1, 0,'a','b');
// console.log(numbers);


//**finding elements in array (primitives) */
// const numbers = [1,2,3,2,4,5];

// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(2));

// console.log(numbers.indexOf(1) !== -1); //not used often

// console.log(numbers.includes(1));

//*Finding elements in array (refernce) */
// const courses =[
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'}
// ];

// const course = courses.findIndex(function(course){
//     return course.name === 'b';
// });
// console.log(course);

//** Arrow functions */
//  const courses = [
//     {id: 1, name: 'c'},
//     {id: 2, name: 'd'}
//  ];
//  const course = courses.find(course => course.name === 'c');
//  console.log(course);

//** Removing element in array */
// const numbers = [1, 2, 3, 4];
//end
// const last = numbers.pop();
//begin
// const first = numbers.shift();
//middle
// numbers.splice(1, 3);
// console.log(numbers);

//** combining and slicing arrays */
// const first = [{id: 1}];
// const second = [4,5,6];

// const combined = first.concat(second);
// first[0].id = 11;
// const slicing = combined.slice();

// console.log(combined);
// console.log(slicing);

//** spread operator */
// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first, 'a', ...second , 'b'];

// const copy = [...combined];
// console.log(combined);
// console.log(copy);

//** iterating array */
// const numbers = [1,2,3,4];
// for (let number of numbers)
//     console.log(number);

// numbers.forEach((number, index) => console.log(number, index));

//** joining arrays */
// const numbers = [1,2,4];
// const joined = numbers.join('*');
// console.log(joined);

// const message = 'This is a message';
// const parts = message.split(' ');
// console.log(parts);

// const combined = parts.join('-');
// console.log(combined);

//** sorting arrays */
// const numbers = [2,3,1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     { id: 1, name: 'node.js'},
//     { id: 2, name: 'angular.js'}
// ];

// courses.sort(function(a,b){
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// })
// console.log(courses);

//** testing the elements of an array */
// const numbers = [1,-2,3,4];

// const atLeastOnePositive = numbers.some(function(value){
//     return value >= 0;
// })
// console.log(atLeastOnePositive);

//** Filtering an array */
// const numbers = [1,-2,3,4];

// const filtered = numbers.filter(value => value <= 0);
// console.log(filtered);

//** Mapping an array */
// const numbers = [1,-2,3,4];

// const filtered = numbers.filter(value => value >= 0);

// const items = filtered.map(value => '<li>' + value + '</li>');

// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);

// const numbers = [1,-2,3,4];

// const items = numbers.filter( n => n >= 0).map( n => ({ value: n })).filter( obj => obj.value > 1).map(obj => obj.value);

// console.log(items);

//** reducing an array */
const numbers = [1,-2,3,4];

const sum = numbers.reduce((accumulator, currentvalue) =>  accumulator + currentvalue);

console.log(sum);