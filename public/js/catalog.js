const productsButton = document.getElementById('see-all-products-button');
const productsList = document.getElementById('articles-list');

const showAllProducts = localStorage.getItem('showAllProducts');

function displayAllProducts() {
	if (productsButton && productsList && showAllProducts === 'true') {
		productsList.classList.remove('only-display-3-articles');

		productsButton.textContent = 'Voir moins';

		// Nettoyer le LocalStorage après utilisation
		localStorage.removeItem('showAllProducts');
	}

	if (productsButton && productsList) {
		productsButton.addEventListener('click', () => {
			productsList.classList.toggle('only-display-3-articles');

			if (productsList.classList.contains('only-display-3-articles')) {
				productsButton.textContent = 'Voir tous les produits';
			} else {
				productsButton.textContent = 'Voir moins';
			}
		});
	}
}

displayAllProducts();

function showAllProductsOnCatalog() {}

showAllProductsOnCatalog();
