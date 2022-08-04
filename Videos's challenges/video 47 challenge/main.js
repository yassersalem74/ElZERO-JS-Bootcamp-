let zero = 0;
let counter = 3;

let my = ["Ahmed" , "Mazero" , "Elham" , "Osama" , "Gamal" , "Ameer"];


// task 1

console.log(my.slice(zero,counter).concat("Osama").reverse());
//["Osama" , "Elham" , "Mazero" , "Ahmed"]

/////////////////////////////////////////////////////////////////////////////

// task 2

console.log(my.slice(zero,counter).reverse().splice(0,2));
console.log(my.slice(1,counter).reverse());

// ["Elham" , "Mazero"]

/////////////////////////////////////////////////////////////////////////////



// task 3


// ["Elzero"]

/////////////////////////////////////////////////////////////////////////////


// task 4

console.log(my[counter]);
// ["rO"]
