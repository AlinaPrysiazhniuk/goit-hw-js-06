const refs = {
  inputEl: document.querySelector("[data-number]"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  divEl: document.querySelector(".boxes"),
};

//-----------------створення колекції
refs.buttonCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const arrayBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("boxes");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }

  refs.divEl.append(...arrayBoxes);
  console.log(arrayBoxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//-----------------видалення колекції
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.inputEl.value = "";
  refs.divEl.innerHTML = "";
}
