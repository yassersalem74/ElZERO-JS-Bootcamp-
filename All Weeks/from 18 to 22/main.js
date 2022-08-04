// task 1

console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

///////////////////////////////////////////////////////////////////////

// task 2


let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + ++num -true);

// Soultion tree
console.log(++num +true); // 6

// Solution four
console.log(--num +true +true); // 6

// Solution five
console.log(++num +true +false); // 6

//solution six
console.log(num +true);

///////////////////////////////////////////////////////////////////////////////


// task 3

let number = "10";

// Solution One
console.log(+number + +number); // 20

// Solution Two
console.log(+number + ++number  -true); // 20

// Solution Three
console.log(+number + --number -true); // 20


// Solution Four
console.log(+number++ + +number - true); // 20

// Solution five
console.log(number + ++number -true -true -true); // 20