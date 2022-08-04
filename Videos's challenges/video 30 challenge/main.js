let a = "Elzero web school";


//include this method in your solution [slice , charAt]
//Zero

// console.log(a.slice(2,6).toUpperCase().charAt(1));
// console.log(a.charAt(2).toUpperCase());
// console.log(a.slice(3,6));
console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`)

///////////////////////////////////////////////////////////////////////////////////////

//HHHHHHHH
console.log("h".repeat(8).toUpperCase());

///////////////////////////////////////////////////////////////////////////////////////

//return array  [Elzero]
console.log(a.split((" "),1));

///////////////////////////////////////////////////////////////////////////////////////

//use only "substr" method + template literals in your solution 
//Elzero School

// console.log(a.substr(0,6));
// console.log(a.substr(11,1).toUpperCase());
// console.log(a.substr(12));

console.log(`${a.substr(0,6)} ${a.substr(11,1).toUpperCase()}${a.substr(12)}`)

///////////////////////////////////////////////////////////////////////////////////////

//solution must be dynamic and string may be change
//elZERO WEB SCHOOl

// console.log(a.substr(0,1).toLowerCase());
// console.log(a.substring(1,a.length - 1).toUpperCase());
// console.log(a.substring(a.length-1).toLowerCase());
console.log(`${a.substr(0,1).toLowerCase()}${a.substring(1,a.length - 1).toUpperCase()}${a.substring(a.length-1).toLowerCase()}`);


///////////////////////////////////////////////////////////////////////////////////////
