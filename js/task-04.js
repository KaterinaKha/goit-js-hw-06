let counterValue = 0;
const counterValueElement = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById("value");

decrementBtn.addEventListener("click", handleClickDecrementBtn);
function handleClickDecrementBtn() {
	counterValue -= 1;
	counterValueElement.textContent = counterValue;
}

incrementBtn.addEventListener("click", handleClickIncrementBtn);
function handleClickIncrementBtn() {
	counterValue += 1;
	counterValueElement.textContent = counterValue;
}
