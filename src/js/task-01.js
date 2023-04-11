const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
	const categoryName = category.querySelector("h2").textContent;
	console.log(categoryName);

	const categoriesItemList = category.querySelectorAll("li").length;
	console.log(`Elements: ${categoriesItemList}`);
});
