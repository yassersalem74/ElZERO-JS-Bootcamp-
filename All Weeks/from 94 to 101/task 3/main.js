let deletedEl = document.querySelector("p");
deletedEl.remove();




let mainEle = document.querySelector(".our-element");


let added1 = document.createElement("div");
let attr1 = document.createAttribute("data-value","Start");
let text1 = document.createTextNode("Start");

added1.className = "start";
added1.title = "Start Element";

added1.setAttributeNode(attr1);
added1.appendChild(text1);


mainEle.before(added1);

let added2 = document.createElement("div");
let attr2 = document.createAttribute("data-value","End");
let text2 = document.createTextNode("End");

added2.className = "End";
added2.title = "End Element";

added2.setAttributeNode(attr2);
added2.appendChild(text2);


mainEle.after(added2);