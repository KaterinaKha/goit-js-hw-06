function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeBtnColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeBtnColor.addEventListener("click", () => {
	colorSpan.textContent = getRandomHexColor();
	body.style.backgroundColor = colorSpan.textContent;
});
