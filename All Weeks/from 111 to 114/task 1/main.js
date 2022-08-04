// window.localStorage.setItem("color" , "red");

// document.body.style.backgroundColor = window.localStorage.getItem("color");

// window.localStorage.removeItem("color");


let options = document.querySelectorAll("option");
let selecting = document.querySelectorAll("select");

let fonts = document.querySelector("#fonts");
let colors = document.querySelector("#colors");
let size = document.querySelector("#size");
let result = document.querySelector(".result");




let attr = function(){
  result.style.cssText = localStorage.css;

  options.forEach(opt => opt.removeAttribute("selected"));
  selecting.forEach(selecting => document.querySelector(`[value="${localStorage[`${selecting.id}`]}"]`).setAttribute("selected", "")
  );
};

let changes = function () {
  selecting.forEach(sel => (localStorage[`${sel.id}`] = sel.value));
  localStorage.css = `font-family: "${fonts.value}"; color: ${colors.value}; font-size: ${size.value}`;
  attr();
};

if (localStorage.css) attr();

fonts.onchange = changes;
colors.onchange = changes;
size.onchange = changes;



