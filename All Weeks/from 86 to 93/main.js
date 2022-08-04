// way1 = document.querySelector(".element");
// console.log(way1);

// way2 = document.querySelector("#elzero");
// console.log(way2);

// way3 = document.querySelector("[name=js]");
// console.log(way3);

// way4 = document.querySelector("div");
// console.log(way4);

// way5 = document.querySelectorAll("div");
// console.log(way5);

// way6 = document.querySelectorAll("div")[0];
// console.log(way6);

// way7 = document.querySelectorAll("div.element")[0];
// console.log(way7);

// way8 = document.querySelectorAll("div#elzero")[0];
// console.log(way8);

// way9 = document.getElementById("elzero")
// console.log(way9);

// way10 = document.getElementsByClassName("element");
// console.log(way10);

// way11 = document.getElementsByTagName("div");
// console.log(way11);

// way12 = document.getElementsByName("js");
// console.log(way12);

// way13 = (document.body.children[0]);
// console.log(way13);

// way14 = (document.body.childNodes[1]);
// console.log(way14);

// way15 =(document.body.firstElementChild);
// console.log(way15);

// ///////////////////////////////////////////////////////////////////////////////////////

// // task2

// // let myimage = document.images;
// // for (let i = 0; i < myimage.length; i++) {
// //   myimage[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
// //   myimage[i].setAttribute("alt", "Elzero Logo");
// // }

// ///////////////////////////////////////////////////////////////////////////////////////

// // task3

// let input = document.querySelector("input");
// let result = document.querySelector(".result");

// input.setAttribute("min", "0");

// input.addEventListener("input", function () {
//   let pound = input.value * 15.6;
//   result.textContent = `{${input.value}} USD Dollar =
//   {${pound.toFixed(2)}} Egyptian Pound`;
// });


// ///////////////////////////////////////////////////////////////////////////////////////

// // task4


// let first = document.querySelector(".one");
// let second = document.querySelector(".two");
// let firstTitle = first.getAttribute("title");
// let secondTitle = second.getAttribute("title");
// let textFirst = first.textContent;

// first.setAttribute("title", secondTitle);
// second.setAttribute("title", firstTitle);


// second.textContent = `${firstTitle  } ${document.getElementsByTagName("h2").length}`;
// first.textContent = secondTitle;

// ///////////////////////////////////////////////////////////////////////////////////////

// // task5

// let myimage2 = document.images;
// for (let i = 0; i < myimage2.length; i++) {
// if(!myimage2[i].alt){
//   myimage2[i].alt = "Elzero New"
// }
// else{
//   myimage2[i].alt = "Old"

// }
// }


///////////////////////////////////////////////////////////////////////////////////////

// task6

// <form action="">
//   <input type="number" name="elements" class="input" placeholder="Number Of Elements" />
//   <input type="text" name="texts" class="input" placeholder="Elements Text" />
//   <select name="type" class="input">
//     <option value="Div">Div</option>
//     <option value="Section">Section</option>
//   </select>
//   <input type="submit" name="create" value="Create" />
//   <div class="results"></div>
// </form>


const elsCount = document.getElementsByName("elements")[0],
  form = document.forms,
  type = document.querySelector("select"),
  text = document.getElementsByName("texts")[0],
  results = document.querySelector(".results");

elsCount.setAttribute("min", "0");

form[0].onsubmit = function (el) {
  el.preventDefault();
  document.querySelectorAll(".box").forEach(el => el.remove());

  for (let i = 1; i <= elsCount.value; i++) {
    const myEl = document.createElement(type.value);
    const myelText = document.createTextNode(text.value);

    myEl.className = "box";
    myEl.title = "Element";
    myEl.id = `id-${i}`;

    ////////////////////// STYLING
    myEl.style.display = "inline-block";
    myEl.style.width = "200px";
    myEl.style.margin = "20px";
    myEl.style.padding = "10px";
    myEl.style.color = "#fff";
    myEl.style.textAlign = "center";
    myEl.style.backgroundColor = "#ff5722";
    myEl.style.borderRadius = "10px";
    ///////////////////////

    myEl.appendChild(myelText);
    results.appendChild(myEl);
  }
};

////////////////////// STYLING

// const input = document.querySelectorAll(".input"),
//   submit = document.querySelector("[type='submit']"),
//   box = document.querySelectorAll(".box");

// for (let i = 0; i < input.length; i++) {
//   input[i].style.display = "block";
//   input[i].style.boxSizing = "border-box";
//   input[i].style.width = "250px";
//   input[i].style.padding = "10px";
//   input[i].style.margin = "15px auto";
//   input[i].style.borderRadius = "10px";
//   input[i].style.border = "none";
//   input[i].style.border = "solid 1px #00ffff";
//   input[i].style.backgroundColor = "#e6ffff";
// }

// submit.style.backgroundColor = "#009999";
// submit.style.border = "none";
// submit.style.color = "#fff";
// submit.style.cursor = "pointer";


