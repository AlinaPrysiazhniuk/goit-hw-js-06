const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", notInputFocus);

function notInputFocus() {
  console.log("input not in focus");
  const stringLength = inputEl.value.length;
  if (stringLength === 6) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
