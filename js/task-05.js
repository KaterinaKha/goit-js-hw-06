const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", getName);

function getName(event) {
	// console.log(event.currentTarget.value);
	const inputValue = event.target.value.trim();
	// outputEl.textContent = inputValue ? inputValue : "Anonymous";
	if (!inputValue) {
		outputEl.textContent = "Anonymous";
	} else {
		outputEl.textContent = inputValue;
	}
}
