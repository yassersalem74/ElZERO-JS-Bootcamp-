// task 1

// Needed Output
// Set(3) {10, 20, 2}
// 2

let setOfNumbers = new Set([10]);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[2]);

//////////////////////////////////////////////////////////////////

// task 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(new Set(myFriends.sort()));
console.log(myFriends.sort() && new Set(myFriends) );

//////////////////////////////////////////////////////////////////

// task 3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let myNewMap =new Map(Object.entries(myInfo));
console.log(myNewMap);
console.log(myNewMap.size);
console.log(myNewMap.has("role"));

//////////////////////////////////////////////////////////////////

// task 4

// let theNumber = 100020003000;

// Needed Output
// 123

let theNumber = 100020003000;

console.log(...theNumber.toString())

let my = new Set ([...theNumber.toString()].map(Number))
my.delete(0)

console.log(my)

// let my2 = (Array.from([theNumber]));
// // my2.delete(0);
// console.log(...my2)

//////////////////////////////////////////////////////////////////

// task 5

let theName = "Elzero";

// Needed Output  *tring to array*
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
console.log(new Set(theName));
console.log(Array.from([...theName]));


//////////////////////////////////////////////////////////////////

// task 6

//one
let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

console.log(chars1.copyWithin(3));


//two
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(chars2.copyWithin(3 ,4 ))



// Three 
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars3.copyWithin(2))

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]


//////////////////////////////////////////////////////////////////

// task 7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// [1, 2, 3, 4, 5, 6]

// 1 
// console.log([...numsOne, ...numsTwo]);
//2
// numsOne.push(...numsTwo);
// console.log(numsOne);
//3
// console.log(Array.from([...numsOne , ...numsTwo]));
//4
// console.log(numsOne.concat(numsTwo));
//5
// let num = function (first, second) {
//   for (let i = 0; i < second.length; i++) {
//       first.push(second[i])
//   }
//   return first
// }

// console.log(num(numsOne, numsTwo));

//////////////////////////////////////////////////////////////////

// task 7
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210

console.log(Math.min(...n1) * Math.min(...n1) * n2.length - (Math.max(...n1) * n2.length));  //210
console.log(n1.push(...n2) * Math.max(...n1));  //210

