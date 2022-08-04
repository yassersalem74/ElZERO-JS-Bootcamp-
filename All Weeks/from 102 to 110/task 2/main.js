// Variables
let container = document.createElement("div");
let heading = document.createElement("h1");
let text = document.createElement("p");
let btn = document.createElement("button");


function popup() {
  // Adding the text
  heading.textContent = "Welcome";
  text.textContent = "Welcome to Elzero Web School";
  btn.textContent = "X";
  // Adding the elements to the page
  container.append(heading, text, btn);
  document.body.append(container);

  // Closing the popup
  btn.addEventListener("click", function () {
    btn.parentElement.remove();
  });

  // Styling
  document.body.style.cssText =
    "display: flex; justify-content: center; align-items: center; transition: 0.3s;";
  container.style.cssText =
    "background-color: rgb(0 0 0 / 5%); border: 1px solid #ccc; padding: 32px 128px; color: #331107; text-align: center; font-size: 20px; position: relative; border-radius: 15px 0;     box-shadow: 0px 0px 20px; transition: 0.3s;";
  btn.style.cssText =
    "position: absolute; top: 12px; right: 12px; width: 32px; height: 32px; background-color: #e64e1f; border: none; color: #fff; border-radius: 50%; font-weight: 900; cursor: pointer; transition: 0.3s;";
}

// Setting the time to enable the function
setTimeout(popup, 2000);
