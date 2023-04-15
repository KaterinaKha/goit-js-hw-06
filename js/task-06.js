const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");
// console.log(dataLength);

inputEl.addEventListener("blur", validateLength);

function validateLength() {
	if (inputEl.value.length < dataLength || inputEl.value.length > dataLength) {
		inputEl.classList.add("invalid");
	} else {
		inputEl.classList.remove("invalid");
		inputEl.classList.add("valid");
	}
	console.log(inputEl.value.length);
}
