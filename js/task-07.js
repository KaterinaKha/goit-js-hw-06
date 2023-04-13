const inputVal = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

inputVal.addEventListener("input", changingSize);

function changingSize(inputVal) {
	textToChange.style.fontSize = `${inputVal.currentTarget.value}px`;
}
