let div = document.createElement("div");

let counter = setInterval(countdown, 1000);


let num = document.querySelector(".number").innerHTML;
div.textContent = num;
document.body.append(div);

function countdown() {
  num--;
  div.textContent = num;
  if (!num) {
    clearInterval(counter);
    window.open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/" ,"_self");
  }
}

div.style.cssText = "display:flex; justify-content: center; align-items: center; font-size: 64px; color: #f7931f;";
