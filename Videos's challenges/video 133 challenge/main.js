let n1 = [10 , 30 , 10 , 20];
let n2 = [30 , 20 , 10];

console.log();        //210

console.log(Math.min(...n1) * Math.min(...n1) * n2.length - (Math.max(...n1) * n2.length));  //210
console.log(n1.push(...n2) * Math.max(...n1));  //210


