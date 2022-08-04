// task 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;


// Method 1   // ["Ahmed", "Elham", "Osama"];
console.log(myFriends.slice(myFriends.length - myFriends.length , num)); 

// Method 2
console.log(myFriends.splice(myFriends.length - myFriends.length , num)); 

////////////////////////////////////////////////////////////////////////////////////

// task 2


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

console.log(friends.splice(friends.length - num , (friends.length - num)) .concat("Osama")); 
// ["Eman", "Osama"]

//////////////////////////////////////////////////////////////////////////////////////


// task 3


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo);

console.log(finalArr.sort().reverse()); 
// ['Z', 'X', 'D', 'C', 'B', 'A']

//////////////////////////////////////////////////////////////////////////////////////


// task 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// ZERO



//////////////////////////////////////////////////////////////////////////////////////


// task 5


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


if(haystack.indexOf(needle)){
    console.log("Found");
}

if(haystack.lastIndexOf(needle)){
    console.log("Found");
}

if(haystack.includes(needle)){
    console.log("Found");
}

//////////////////////////////////////////////////////////////////////////////////////


// task 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];

// Your Code Here

// let arr11 = arr1.splice(length-1);
// console.log(arr11);

// let arr22 = arr2.splice(length-1);
// console.log(arr22);

// let arr23 = arr2.splice(length-3,1);
// console.log(arr23);

let allArrs = arr1.concat(arr2).sort();
let allArrs1 = allArrs.slice(length-3);

console.log(allArrs1);
console.log(allArrs1.join("").toLowerCase());

// fxy
