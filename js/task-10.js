//записати у змінні елементи input та дві кнопки
//додати на кнопки слухача події
//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого < div > - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

const refs = {
  inputEl: document.querySelector("[data-number]"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  divControl: document.querySelector("#controls"),
};

//-----------------створення колекції
refs.buttonCreate.addEventListener("click", createBoxes);

//-------------пишемо функцію, що рендерить колекцію елементів

function createBoxes(amount) {
  let inputNumber = refs.inputEl.value;
  console.log(inputNumber);

  const newEl = document.createElement("div");
  newEl.classList.add("boxes1");
  newEl.style.width = "30px";
  newEl.style.height = "30px";
  newEl.style.color = getRandomHexColor();
  console.log(newEl);
  const colorEl = getRandomHexColor();
  console.log(colorEl);
  refs.divControl.insertAdjacentHTML("beforeEnd", newEl);
  //refs.divControl.append(newEl1);
  //return newEl;
  //newEl.textContent = ingredient;
  //return newItem;
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
}
