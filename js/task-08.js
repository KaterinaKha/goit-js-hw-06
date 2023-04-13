const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);

	const email = formData.get("email");
	const password = formData.get("password");
	console.log(email);
	console.log(password);

	if (!email || !password) {
		return alert("Всі поля повинні бути заповнені! Введіть ваші дані");
	}
	console.log(email, password);
	e.target.reset();
}
