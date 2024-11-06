//arithmetic operators//
let x =10;
let y = 2;

// console.log(x+y); //12
// console.log(x-y); //8
// console.log(x*y); //20
// console.log(x/y); //5
// console.log(x**y);
// console.log(x%y);

//increment (++)
// console.log(x++);
// console.log(x); //11

//decrement (--)
// console.log(y--);
// console.log(y); //1

//assignment operator//
// x = x+5;
// x += 5;
// x *= 2;

//comparison operator//

//relational
// console.log(x>1);
// console.log(x>=1);
// console.log(x<1);
// console.log(x<=1);

//equality

//strict equality (type+value) same
// console.log('1'===1);
// // console.log(x !== y);

// //lose equality (value same only)
// console.log('1'==1);

//ternary operator 
// let points = 90;
// let type = points > 100 ? 'Gold' : 'Silver';
// console.log(type);

//logical operator//
//logical and (&&) if both operand true then the logic is true
//logical or || if one of operand is true then logic is true
let highIncome = false;
let goodCredit = false;
let eligibleForLoad = highIncome || goodCredit;
console.log('Not Eligble', eligibleForLoad);

//not opeartor (!)
let refuseLoan = !eligibleForLoad;
console.log('Refuse Loan', refuseLoan);