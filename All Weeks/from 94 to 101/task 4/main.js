let firstEle = document.querySelector("span");
let secEle = firstEle.nextSibling;
console.log(secEle);

let thirdEle = secEle.nextSibling;
console.log(thirdEle);

let mainEle = thirdEle.nextSibling ;
console.log(mainEle.textContent.trim());


const parent = document.querySelector("div");
const child = document.querySelector("span");

console.log(parent.lastChild.nodeValue.trim());
console.log(parent.childNodes[4].textContent.trim());
console.log(child.nextSibling.nextSibling.nextSibling.textContent.trim());
