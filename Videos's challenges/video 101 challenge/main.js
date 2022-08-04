// let header = document.createElement("div");
// header.className = "header";


// let logo = document.createElement("div");
// logo.className = "logo";
// logo.appendChild(document.createTextNode("Elzero"));


// let menu = document.createElement("ul")
// menu.className = "menu";

// let m1 = document.createElement("li")
// m1.appendChild(document.createTextNode("Home"));
// m1.className ="lists1"

// let m2 = document.createElement("li")
// m2.appendChild(document.createTextNode("About"));
// m2.className ="lists2"

// let m3 = document.createElement("li")
// m3.appendChild(document.createTextNode("Service"));
// m3.className ="lists3"

// let m4 = document.createElement("li")
// m4.appendChild(document.createTextNode("Contact"));
// m4.className ="lists4"



// menu.appendChild(m1);
// menu.appendChild(m2);
// menu.appendChild(m3);
// menu.appendChild(m4);

// header.appendChild(logo);
// header.appendChild(menu);
// document.body.appendChild(header);



// header.style.cssText = "display : flex ; padding : 20px ; justify-content : space-between  ; align-items : center; background-color:rgb(255,255,255); "
// logo.style.cssText = "font-weight :bold ; color:rgb(35,169,110); font-size:26px; "
// menu.style.cssText = "padding :0px ; margin:0px; display:flex; list-style:none; "
// // listss.style.cssText = "margin-left:10px; color:red; "
// document.querySelector(".lists1").style.cssText = "padding:10px;"
// document.querySelector(".lists2").style.cssText = "padding:10px;"
// document.querySelector(".lists3").style.cssText = "padding:10px;"
// document.querySelector(".lists4").style.cssText = "padding:10px;"





// let content = document.createElement("div");
// content.className = "content";

// let product = document.createElement("div");
// product.className = "product";

// product.appendChild(document.createTextNode("Elzero"));



// let number = document.createElement("span");
// number.className = "number"

// content.appendChild(product);
// product.appendChild(number);

// document.body.appendChild(content);



// content.style.cssText = "box-sizing: border-box; display: grid; grid-template-columns: repeat(3, 1fr); padding: 20px; justify-content: center; gap: 20px; backgroung-color : blue"
// number.style.cssText = "display: block; font-size: 40px; color: rgb(0, 0, 0); margin: 10px;"





// for (let i = 1; i <= 15; i++) {


//   // Looping on content elements
//   let productBox = create("div");
//   let productNum = create("span");
//   productBox.className = `product`;
//   productNum.textContent = `${i}`;
//   productBox.textContent = "Product";
//   productBox.prepend(productNum);
//   content.append(productBox);

//   productBox.style.cssText =
//     "box-sizing: border-box; padding: 20px; background-color: #fff; border: 1px solid #ddd; text-align: center; color: #888; border-radius: 6px;";
//   productNum.style.cssText =
//     "display: block; font-size: 40px; color: #000; margin: 10px;";
// }







// A function for creating elements
const create = el => document.createElement(`${el}`);

// Elements
const header = create("header");
const logo = create("div");
const menu = create("ul");
const content = create("div");
const footer = create("footer");

// Classes
header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "product";
footer.className = "footer";

// Looping on ul & content elements
for (let i = 1; i <= 15; i++) {
  if (i <= 4) {
    // Looping on ul elements
    let menuLi = create("li");
    menuLi.className = `menu-list-${i}`;
    menu.append(menuLi);
    menuLi.style.cssText = "cursor: pointer;";
  }

  // Looping on content elements
  let productBox = create("div");
  let productNum = create("span");
  productBox.className = `product`;
  productNum.textContent = `${i}`;
  productBox.textContent = "Product";
  productBox.prepend(productNum);
  content.append(productBox);

  productBox.style.cssText =
    "box-sizing: border-box; padding: 20px; background-color: #fff; border: 1px solid #ddd; text-align: center; color: #888; border-radius: 6px;";
  productNum.style.cssText =
    "display: block; font-size: 40px; color: #000; margin: 10px;";
}

// Adding elements to the page
header.append(logo);
header.append(menu);
document.body.prepend(footer);
document.body.prepend(content);
document.body.prepend(header);

// Adding text
logo.textContent = "Elzero";
document.getElementsByTagName("li")[0].textContent = "Home";
document.getElementsByTagName("li")[1].textContent = "About";
document.getElementsByTagName("li")[2].textContent = "Service";
document.getElementsByTagName("li")[3].textContent = "Contact";
footer.textContent = "Copyright 2021";

// Styling
document.body.style.cssText =
  "margin: 0px; background-color: #ececec; font-family: Tahoma, Arial;";
header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #fff;";
logo.style.cssText = "color: #23a96e; font-weight: bold; font-size: 26px;";
menu.style.cssText =
  "list-style: none; padding: 0px; margin: 0px; display: flex; gap: 10px; font-size: 14px; color: #888";
content.style.cssText =
  "box-sizing: border-box; display: grid; grid-template-columns: repeat(3, 1fr); padding: 20px; justify-content: center; gap: 20px;";
footer.style.cssText =
  "background-color: #23a96e; font-size: 26px; text-align: center; padding: 20px; color: #fff";
