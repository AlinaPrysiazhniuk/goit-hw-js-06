const refs = {
  spanEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.buttonEl.addEventListener("click", onInputChange);

function onInputChange() {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
  refs.spanEl.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
