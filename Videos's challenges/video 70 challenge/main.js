// // task 1

// let names = function (...people){
//     return (`String ${people.join(", ")} => Done !`);
// };
// console.log(names("Osama","Yasser","Ahmed"));

let names = (...people) => (`String ${people.join([", "])} => Done !`);
console.log(names("Osama","Yasser","Ahmed"));

//////////////////////////////////////////////////////////////////////////////////////

// task 2


// let myNumbers = [20 , 50 , 10 , 60];
// let print = function calc(one ,two , ...nums){
//     let result = 0;
//     for (i=0 ; i<nums.length ; i++){
//         result = result + nums[i] + one + two
//     }
//     return result;
// }

// console.log(print(10,20,50));



let myNumbers = [20 , 50 , 10 , 60];
let calc = (one , two , ...nums) => {
     let result = 0;
    for (i=0 ; i<nums.length ; i++){
        result = result + nums[i] + one + two
    }
    return result;
};   
console.log(calc(10,20,50));

