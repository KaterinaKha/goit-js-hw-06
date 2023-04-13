const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", getName);

function getName(event) {
	// console.log(event.currentTarget.value);
	outputEl.textContent = event.currentTarget.value;
}
