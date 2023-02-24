const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const currentValue = event.currentTarget.value;

  refs.output.textContent = currentValue;
  if (currentValue === "") {
    refs.output.textContent = "Anonymous";
  }
}
