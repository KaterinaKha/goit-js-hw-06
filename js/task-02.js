const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listElement = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
	const liElement = document.createElement("li");
	liElement.textContent = ingredient;
	liElement.classList.add("item");
	liElement.classList;
	fragment.appendChild(liElement);
}

listElement.appendChild(fragment);
console.log(listElement);
