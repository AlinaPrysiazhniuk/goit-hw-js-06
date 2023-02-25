const totalCategories = document.querySelectorAll(".item");
console.log("Number of categories:", totalCategories.length);

for (let item of totalCategories) {
  let category = item.firstElementChild.textContent;
  let totalEl = item.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${totalEl}`);
}
