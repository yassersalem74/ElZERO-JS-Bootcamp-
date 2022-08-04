let current = document.querySelector("[title = 'Current']");
let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let cls = document.querySelector(".classes-list div");

function addOrRemove() {
  // Removing all the elements from the page at the start of every process
  document.querySelectorAll("span").forEach(el => el.remove());

  // Clearing the input & Adding to and removing the classes from "current element"
  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (add.value)
      current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);

    if (remove.value)
      current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
  }
  this.value = "";

  // Displaying the classes names on the page
  if (current.classList.length) {
    [...current.classList].sort().forEach(el => {
      let clSpan = document.createElement("span");
      clSpan.textContent = el;
      cls.append(clSpan);
    });
  } else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;
