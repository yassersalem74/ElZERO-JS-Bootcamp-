// task2
document.write("<h1>Yasser</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

/////////////////////////////////


// task3
console.log("%cyasser %cahmed %csalem" , "color: red; font-size: 40px" , "color: blue; font-size: 40px" , "color: green; font-size: 40px")

//////////////////////////////////////

// task4
console.group("Group 1");
console.log("yasser");
console.log("salem");

console.group("Group 1.1");
console.log("yasser");
console.log("salem");

console.group("Group 1.2");
console.log("yasser");
console.log("salem");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("yasser");
console.log("salem");
console.groupEnd();

///////////////////////////////////////////////


// task5
console.table(["yasser" , "ahmed" , "salem" , "esmaiel" , "mohamed"]);

///////////////////////////////////