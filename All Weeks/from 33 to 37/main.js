// task 1


// let num = 9; // "009"


// let num = 20; // "020"


let num = 110; // "110"


if (num < 10) {
    console.log(`${"00"}${num}`)
}
if (num > 10 && num < 100){
    console.log(`${"0"}${num}`)
}
if (num >= 100){
    console.log(num)
}


///////////////////////////////////////////////////////////////////////

// task 2

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

if(num1 == str){
    console.log("success");
}
else{console.log("falsee")};     //seccess


if(num1 == str){
    console.log("success");
}
else{console.log("falsee")};     //success


if(num1 !== str2 &&  typeof num != typeof str2){
    console.log("success");
}
else{console.log("falsee")};     //success



if(str == str2 || typeof str == typeof str2){
    console.log("success");
}
else{console.log("falsee")};     //success


///////////////////////////////////////////////////////////////////////

// task 3

let num11 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if (num3 > num11 && typeof num3 != typeof num2)
{
    console.log("case one");
}

if ( num3 > num11 && num3 == num2 && typeof num3 != typeof num2 ){
console.log("case two");
}

if(num3 != num11 && typeof num3 != typeof num11 && typeof num3 != typeof num2){
console.log("case three");
}



///////////////////////////////////////////////////////////////////////

// task 4

// Edit What You Want Here

let num10 = 17;
let num22 = 2;
let num33 = 17;
let num44 = 53;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num10 > num22) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num10 > num22 && num10 < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num10 > num22 && num10 === num33) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num10 + num22) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num10 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num10 + num22 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num44 - (num10 + num33) + num22 === 21) {
  console.log("True");
} else {
  console.log("False");
}


///////////////////////////////////////////////////////////////////////
