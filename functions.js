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
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts [0];
        this.lastName = parts [1];
    }
};

person.fullName = 'Kamrul Hasan';

console.log (person);