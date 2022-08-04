

let promptMsg = prompt("Print Number From – To", "Example: 5-20");
let promptArr = promptMsg.split("-").sort((a, b) => a - b);

for (let i = +promptArr[0]; i <= promptArr[1]; i++) {
  let num = document.createElement("p");
  num.textContent = i;
  document.body.append(num);
}