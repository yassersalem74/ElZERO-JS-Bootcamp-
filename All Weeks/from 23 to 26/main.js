//task 1

console.log(100_000);
console.log(100000); 
console.log(5e4 + 5e4);

console.log(Math.round(100000.2));
console.log(Math.ceil(99999.8));
console.log(Math.floor(100000.9));
console.log(Math.trunc(100000.4));

console.log(Math.max(100000 , 100));
console.log(Math.min(100000 , 10000000));

console.log(Math.pow(10 , 5));

console.log(10 * 10 * 10 * 10 * 10);

console.log(100000.0);

console.log(10 ** 5);

console.log(1e5);

console.log(parseInt("100000"));

// console.log((100000.0.toFixed(0)));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 2

console.log(Number.MIN_SAFE_INTEGER + Number.MAX_SAFE_INTEGER + Number.MAX_SAFE_INTEGER);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 3
//in one line use  MAX_SAFE_INTEGER to get 16 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar));               // 100
console.log(parseFloat(myVar).toFixed(2));// 100.57

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 5
// get 2 by using isInter 
let num = 10;

// console.log(Number.isInteger(num));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 6

let flt = 10.4;

console.log(Math.round(flt));
console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(Math.trunc(Math.max(flt)));
console.log(Math.trunc(Math.min(flt)));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// task 7

console.log(Math.floor(Math.random() * 5));