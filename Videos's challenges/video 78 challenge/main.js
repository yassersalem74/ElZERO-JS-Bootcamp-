let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution =  myString.split("").filter(function (ele,i,arr){
    return  isNaN(ele) && ele !=="," && !ele.includes(arr[arr.length - true]) 
})

.map(function(ele) {
    return ele === "_" ? " " : ele;
})

.reduce(function(acc ,cur) {
    return acc === cur ? acc : acc+cur;
})

console.log(solution); // Elzero Web School

