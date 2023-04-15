const inputEl = document.querySelector("#validation-input");
const dataLength = inputEl.getAttribute("data-length");
// console.log(dataLength);

inputEl.addEventListener("blur", validateLength);

function validateLength() {
	if (inputEl.value.length == dataLength) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
	} else {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
	console.log(inputEl.value.length);
}
