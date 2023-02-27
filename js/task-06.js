const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", notInputFocus);

function notInputFocus() {
  const inputValue = inputEl.value.trim();
  const stringLength = parseInt(inputEl.dataset.length);

  if (inputValue.length === stringLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
