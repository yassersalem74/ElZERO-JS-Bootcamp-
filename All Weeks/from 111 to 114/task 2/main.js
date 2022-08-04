const inputs = document.querySelectorAll("input");
const sel = document.querySelector("select");
const opts = document.querySelectorAll("option");

const optSelect = function () {
  if (sessionStorage.selected) {
    document.querySelector(`[value="${sessionStorage.selected}"]`).setAttribute("selected", "");
  }
};

if (sessionStorage.length) {
  inputs.forEach(
    input =>
      (document.querySelector(`[type="${input.type}"]`).value = sessionStorage.getItem(input.type))
  );
  optSelect();
}

inputs.forEach(
  input =>
    (input.oninput = function () {
      sessionStorage.setItem(input.type, input.value);
    })
);

sel.onchange = function () {
  sessionStorage.selected = sel.value;
  opts.forEach(opt => opt.removeAttribute("selected"));
  optSelect();
};
