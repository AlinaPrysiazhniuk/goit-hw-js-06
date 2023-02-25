const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = ingredient;
  return newItem;
});

list.append(...elements);
console.log(elements);
