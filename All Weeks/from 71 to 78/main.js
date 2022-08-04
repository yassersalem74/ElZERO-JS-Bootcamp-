// task 1 

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let stringWord = mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele : ""
})

.reduce(function(acc , cur){
    return acc ===  "" ? cur : acc+cur
})


console.log(stringWord)
// Elzero


///////////////////////////////////////////////////////////////////

// task 2

let myString = "EElllzzzzzzzeroo";

let notRepeat = myString.split("").filter(function(ele, i, arr) {
    return arr.indexOf(ele) === i 
})
.reduce (function(acc , cur){
    return acc+cur
})

console.log(notRepeat)
// Elzero


///////////////////////////////////////////////////////////////////

// task 3


let myArray = ["E", "l", "z", ["e", "r"], "o"];

    let flatten = myArray.reduce(function(acc,cur){
        return acc.concat(cur) ,[]
    }).join("")

const oneArray = myArray.reduce((a, c) => a.concat(c), []).join("");

console.log(flatten)
console.log(oneArray)
// Elzero



///////////////////////////////////////////////////////////////////

// task 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let nums = numsAndStrings.filter(function(ele){
    return  !isNaN(ele)
}).map(function(ele){
    return -ele
})
console.log(nums)
// [-1, -10, 10, 20, -5, -3]


///////////////////////////////////////////////////////////////////

// task 5


let numss = [2, 12, 11, 5, 10, 1, 99];

let result = numss.reduce(function(acc , cur){
    return cur % 2 ? acc + cur : acc * cur
    
},1)


console.log(result)
// 500