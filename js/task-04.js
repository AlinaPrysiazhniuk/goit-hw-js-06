const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.decrementBtn.addEventListener("click", decrementEl);
refs.incrementBtn.addEventListener("click", incrementEl);

let counterValue = 0;

function decrementEl() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function incrementEl() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}
