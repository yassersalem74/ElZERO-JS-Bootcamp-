function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.slice(0, zName.indexOf(" "));
    let lName = zName.slice(zName.indexOf(" "), zName.length);
    return `${fName} ${lName[1].toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    let tage = zAge;
    return (`your age is ${(tage.match(/\d+/))}`)
  }

  function countryTwoLetters(zCountry) {
    let countrry = zCountry;
    return (`You live in ${countrry.slice(0,2).toUpperCase()}`)
  }  

  function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }


  return fullDetails(); 
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     let fName = zName.slice(0, zName.indexOf(" "));
//     let lName = zName.slice(zName.indexOf(" "), zName.length);
//     return `${fName} ${lName[1].toUpperCase()}.`;
//   }
//   function ageWithMessage(zAge) {
//     return `Your Age Is ${parseInt(zAge)}`;
//   }
//   function countryTwoLetters(zCountry) {
//     let countryAbb = zCountry.slice(0, 2).toUpperCase();
//     return `You Live In ${countryAbb}`;
//   }
//   function fullDetails() {
//     return `Hello ${namePattern(zName)}, ${ageWithMessage(
//       zAge
//     )}, ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails();
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY



////////////////////////////////////////////////////////////////////////////////////

// task 2

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = _ =>  `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol , web , tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

////////////////////////////////////////////////////////////////////////////////////

// task 3

function checker(zNamee) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zNamee}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble



////////////////////////////////////////////////////////////////////////////////////

// task 4
function specialMix(...data) {
  let calc = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) calc += parseInt(data[i]);
  }
  return calc === 0 && typeof data[0] === "string" ? `All Is Strings` : calc;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
console.log(specialMix(0, 0, 0)); // 0






// function specialMix(...data) {
//   for(let j = 0 ; j < data.length ; j++){

// if(data === 'number'){
//   let result = 0;
//   for (let i = 0 ; i < data.length ; i ++){
//     result += data[i];
//   }
// }

// if (data === 'string'){
//   return (`All Is Strings`)
// }
// // else {
// //     let result2 = 0;
// //     let matching = /\d+/;
// //     let all = (data.replace(matching));
// //     for (let k = 0 ; k <all.length ; k++){
// //     result2 += all[i];
// //     }
// // }
// }
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings