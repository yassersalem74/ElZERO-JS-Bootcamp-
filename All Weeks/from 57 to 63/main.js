// task 1

function sayHello(theName, theGender ="") {
    if (theGender === "Male"){
        console.log(`Hello Mr ${theName}`)
    }
    else if (theGender === "Female"){
        console.log(`Hello Miss ${theName}`)
    }
    else {
        console.log(`Hello ${theName}`)
    }

}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/////////////////////////////////////////////////////////////////////////////////////

// task 2

function calculate(firstNum, secondNum, operation) {
  if(!secondNum){
      console.log("Second number not found")
  }
  else if(!operation){
    console.log(firstNum + secondNum);  
  }
  else if(operation === 'add'){
        console.log(firstNum + secondNum);  

  }
  else if(operation === 'subtract'){
     console.log(firstNum - secondNum);  

  }
   else if(operation === 'multiply'){
        console.log(firstNum *+ secondNum);  

  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600


/////////////////////////////////////////////////////////////////////////////////////

// task 3

function ageInTime(theAge) {
  if(theAge < 10 || theAge > 100){
      console.log("Out of the range");
  }
  else{
      console.log(`${theAge * 12} in months`);
      console.log(`${theAge * 84} in weeks`);
      console.log(`${theAge * 365} in days`);
      console.log(`${theAge * 365 * 24} in hours`);
      console.log(`${theAge * 365 * 24 * 60} in minutes`);
      console.log(`${theAge * 365 * 24 * 60 * 60} in seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(22); // Months Example => 456 Months



/////////////////////////////////////////////////////////////////////////////////////

// task 4

function checkStatus(a, b, c) {
  if (typeof a === "string" && typeof b === "number" && typeof c === "boolean")
    c === true
      ? console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`)
      : console.log(
          `Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`
        );
  else if (
    typeof a === "number" &&
    typeof b === "string" &&
    typeof c === "boolean"
  )
    c === true
      ? console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`)
      : console.log(
          `Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`
        );
  else if (
    typeof a === "boolean" &&
    typeof b === "number" &&
    typeof c === "string"
  )
    a === true
      ? console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`)
      : console.log(
          `Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`
        );
  else if (
    typeof a === "boolean" &&
    typeof b === "string" &&
    typeof c === "number"
  )
    a === true
      ? console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`)
      : console.log(
          `Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`
        );
}

checkStatus("Osama", 38, true);
checkStatus(38, "Osama", true);
checkStatus(true, 38, "Osama");
checkStatus(false, "Osama", 38);

// Another Solution

function checkStatus(a, b, c) {
  let str, num, boolean;
  typeof a === "string"
    ? (str = a)
    : typeof a === "number"
    ? (num = a)
    : (boolean = a);
  typeof b === "string"
    ? (str = b)
    : typeof b === "number"
    ? (num = b)
    : (boolean = b);
  typeof c === "string"
    ? (str = c)
    : typeof c === "number"
    ? (num = c)
    : (boolean = c);

  console.log(
    `Hello ${str}, Your Age is ${num}, You ${
      boolean === true ? "Are" : "Are Not"
    } Available For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// function checkStatus(a, b, c) {

    
// if (typeof arguments[0] === "string"){
//     arguments[0] = a;
// }
// else if  (typeof arguments[0] === "number"){
//     arguments[0] = b;
// }
// else if (typeof arguments[0] === "boolean"){
//     arguments[0] = c;
// }



// if (typeof arguments[1] === "string"){
//     arguments[1] = a;
// }
// else if  (typeof arguments[1] === "number"){
//     arguments[1] = b;
// }
// else if (typeof arguments[1] === "boolean"){
//     arguments[1] = c;
// }


// if (typeof arguments[2] === "string"){
//     arguments[2] = a;
// }
// else if  (typeof arguments[2] === "number"){
//     arguments[2] = b;
// }
// else if (typeof arguments[2] === "boolean"){
//     arguments[2] = c;
// }



// if (c === "true"){
//     console.log (`Hello ${a} , your age is ${b},your available for hire`)
// }
// if (c === "false"){
//     console.log (`Hello ${a} , your age is ${b},your not available for hire`)
// }

// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


/////////////////////////////////////////////////////////////////////////////////////

// task 5

function createSelectBox(startYear, endYear) {
    for (i=startYear ; i <= endYear; i++){
          document.write(`<select>`)
          document.write(`<option>${i}</option`)
          document.write(`</select`)
    }
}
createSelectBox(2000,2021);




/////////////////////////////////////////////////////////////////////////////////////

// task 6



function multiply(...numbers) {
let result = 1;
    for(k = 0 ; k < numbers.length ; k++){
 if(typeof numbers[k] === "string") continue;
    result *= Math.trunc(numbers[k]);
  }
	console.log(result);

};

console.log(multiply(10,20)); // 200    
console.log(multiply("A", 10, 30)); // 15 
console.log(multiply(100.5, 10, "B")); 




// function multiply(...num) {
//   let result = 1;
//   for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === "string") continue;
//     result *= Math.trunc(num[i]);
//   }
//   console.log(result);
// }
// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000