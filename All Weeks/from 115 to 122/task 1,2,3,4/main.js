// task 1

let myNumbers = [1, 2, 3, 4, 5];

const [aaa, , , , eee] = myNumbers
console.log(aaa * eee ); // 5


////////////////////////////////////////////////////////////

// task 2

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

const  [a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


////////////////////////////////////////////////////////////

// task 3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

const [,a1,] = arr3 , [b1 , ,] = arr2 , [c1,,] = arr1

console.log(`My Best Friends: ${a1}, ${b1}, ${c1}`);

// My Best Friends: Shady, Mahmoud, Ahmed

////////////////////////////////////////////////////////////

// task 4

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {age :ag , country :cou , hobbies :[h1 , ,h3] , working :w} = member;

console.log(`My Age Is ${ag} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${cou}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

////////////////////////////////////////////////////////////


