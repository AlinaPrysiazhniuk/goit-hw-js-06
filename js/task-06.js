const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", notInputFocus);

function notInputFocus() {
  const inputValue = inputEl.value.trim();
  const stringLength = parseInt(inputEl.dataset.length);

  if (inputValue.length === stringLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
