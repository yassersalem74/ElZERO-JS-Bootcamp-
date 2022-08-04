let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//find the smallest Number in all variables and return integer
console.log(Math.trunc(Math.min(a,b,c,d)));

//use variable a + d one time to get the needed output     //10000
console.log(Math.pow(a, Math.trunc(d)));



// get integer 2 from  d variable with 4 methods 
console.log(Math.round(d));        
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.trunc(Math.min(a,b,c,d)));


//use variable b + d to get this values 
//66.67      string
//67         number


