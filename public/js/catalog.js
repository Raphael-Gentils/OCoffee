displayAllProducts();

function displayAllProducts() {
	const productsButton = document.getElementById('see-all-products-button');

	const productsList = document.getElementById('articles-list');

	productsButton.addEventListener('click', () => {
		productsList.classList.toggle('only-display-3-articles');

		if (productsList.classList.contains('only-display-3-articles')) {
			productsButton.textContent = 'Voir tous les produits';
		} else {
			productsButton.textContent = 'Voir moins';
		}
	});
}
