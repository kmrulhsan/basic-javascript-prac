//** functions declarations vs expressions */

//** rest parameter */
// function sum (discount, ...prices){
//     const total = prices.reduce((a,b) => a+b );
//     return total * (1 - discount);
// }

// console.log(sum(0.5, 50,50));

//** deafult parameters */
// function interest (principal, rate = 3.5, years = 5){
//     return principal * rate / 100 * years;
// }

// console.log (interest(10000));

//** getters and setters */
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts [0];
//         this.lastName = parts [1];
//     }
// };

// person.fullName = 'Kamrul Hasan';

// console.log (person);

//** try and catch (throw an error and handle that error) */
// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     set fullName(value){
//     if (typeof value !== 'string')
//         throw new Error ('Value is not a string.');

//         const parts = value.split(' ');
//         if (parts.length !==2)
//             throw new Error ('Enter a first and last name');

//         this.firstName = parts [0];
//         this.lastName = parts [1];
//     }
// };

// try{
//     person.fullName = null;
// }
// catch(e){
//     alert(e);
// }

// console.log (person);

//** this keyword */
// method -> object
// function -> global (window, global)

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags(){
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag);
//         }, this);
//     }
// };
// video.showTags();

// function Video(title){
//     this.title = title;
//     console.log(this);
// }

// const v = new Video('C');

//** changing this value in different ways */
// function playVideo(a,b){
//     console.log(this);
// }

// playVideo.call({ name: 'Mosh'}, 1,2,3);
// playVideo.apply({ name: 'Mosh'}, [1,2,3]);
// playVideo.bind({ name: 'mosh'})();

// playVideo();

//using the arrow function with new approach 
// const video = {
//         title: 'a',
//         tags: ['a', 'b', 'c'],
//         showTags(){
//             this.tags.forEach(tag =>{
//                 console.log(this.title, tag);
//             })
//         }
//     };
//     video.showTags();

