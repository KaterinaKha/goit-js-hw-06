const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
	e.preventDefault();
	console.log(e);

	const email = e.currentTarget.elements.email.value;
	const password = e.currentTarget.elements.password.value;
	const elements = {
		email,
		password,
	};

	if (!email || !password) {
		return alert("Всі поля повинні бути заповнені! Введіть ваші дані");
	}

	console.log(elements);
	form.reset();
}
