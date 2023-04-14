const body = document.querySelector("body");
const changeBtnColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
changeBtnColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
	const randomColor = `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
	body.style.backgroundColor = randomColor;
	colorSpan.textContent = randomColor;
	console.log(colorSpan);
}
