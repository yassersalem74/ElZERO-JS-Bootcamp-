// task 1

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"



// let dateNow = new Date();
// let birthday = new Date("Jan 1, 2000");
// let diffDate = dateNow - birthday;

// console.log(birthday);
// console.log(diffDate);

// let seconds = diffDate / 1000;
// console.log (`${seconds} seconds`);

// let minutes = seconds / 60;
// console.log (`${minutes} minutes`);

// let hours = minutes / 60;
// console.log (`${hours} hours`);

// let days = hours / 24;
// console.log (`${days} days`);

// let months = days / 30;
// console.log (`${months} months`);

// let years = days / 365;
// console.log (`${years} years`);


/////////////////////////////////////////////////////////////////////////


// task 2

// Needed Output

// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

// let dateNow1 = new Date();

// dateNow1.setTime(0);
// dateNow1.setFullYear(1980);
// dateNow1.setSeconds(1)
// console.log(dateNow1)

/////////////////////////////////////////////////////////////////////////


// task 3


// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"


// let dateNow1 = new Date();
// dateNow1.setDate(-1);
// console.log(dateNow1);

// const monthsArr = ['January', 'February', 'March', 'April', 'May', 'june' , 'july' , 'august' , 'september' , 'october' , 'november' , 'december' ];
// console.log(
// 	`Previous Month Is ${
// 		monthsArr[dateNow1.getMonth()]
// 	} And Last Day Is ${dateNow1.getDate()}`,
// );

/////////////////////////////////////////////////////////////////////////


// task 4

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

let mybirthdate = new Date("1 1 2000");
console.log(mybirthdate);

// console.log(Date.parse("jan 1 2000"));
let mybirthdate2 = new Date(946677600000);
console.log(mybirthdate2);

let mybirthdate3 = new Date();
mybirthdate3.setFullYear(2000, 0, 1);
mybirthdate3.setHours(0, 0, 0);
console.log(mybirthdate3); 


/////////////////////////////////////////////////////////////////////////


// task 5

// let start = performance.now();

// for (let i = 0 ; i < 9999 ; i++){
//   document.write(`<div> ${i} </div`);
// }

// let end = performance.now();
// let duration = Math.floor(end - start);
// console.log(`loop took ${duration} milliseconds`);

/////////////////////////////////////////////////////////////////////////


// task 6

// function* generateInfiniteNums() {
//   let i = 0;
//   while(true){
//     yield i++;
//   }
// }

// let generator1 = generateInfiniteNums();

// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());

/////////////////////////////////////////////////////////////////////////


// task 7

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}


function* genAll() {
	let nums = new Set();
	let letters = new Set();
	for (let value of genNumbers()) {
		nums.add(value);
	}
	for (let value of genLetters()) {
		letters.add(value);
	}
	yield* nums;
	yield* letters;
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}


/////////////////////////////////////////////////////////////////////////


// task 8
import calc from './mod-one.js';
import * as modOne from './mod-two.js';
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60



