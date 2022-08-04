// task 1 

let a = 10;

a < 10 ? console.log(10)
: a >= 10 && a <= 40 
? console.log("10 to 40") 
: a > 40 ? console.log(">40") 
: console.log("unknown");  

//////////////////////////////////////////////////////////////////////////

// task 2
 
let st ="Elzero Web School";


if((st.length * 2).toString()=== "34"){
    console.log("good")
}


if(st.substr(st.indexOf("W"),1) === "W"){
    console.log("good")
}


if(st !== "srting"){
    console.log("good")
}

if(typeof st.length === "number"){
    console.log("good")
}


if((st.substr(0,6).repeat(2)) === "ElzeroElzero"){
    console.log("good")
}