const productsButton = document.getElementById('see-all-products-button');
const articlesDiv = document.getElementById('articles-list');
const showAllProducts = localStorage.getItem('showAllProducts');

function displayAllProducts() {
	if (productsButton && articlesDiv) {
		productsButton.addEventListener('click', () => {
			if (categorySelect.value !== '') {
				categorySelect.value = '';
				for (const article of articles) {
					article.removeAttribute('style');
				}
			}

			articlesDiv.classList.toggle('only-display-3-articles');

			if (articlesDiv.classList.contains('only-display-3-articles')) {
				productsButton.textContent = 'Voir tous les produits';
			} else {
				productsButton.textContent = 'Voir moins';
			}
		});
	}

	if (productsButton && articlesDiv && showAllProducts === 'true') {
		articlesDiv.classList.remove('only-display-3-articles');

		productsButton.textContent = 'Voir moins';

		// Nettoyer le LocalStorage après utilisation
		localStorage.removeItem('showAllProducts');
	}
}

const categorySelect = document.getElementById('categories-select');
const articles = articlesDiv.getElementsByTagName('article');

function showProductsByCategory() {
	categorySelect.addEventListener('change', () => {
		const selectedCategory = categorySelect.value;

		for (const article of articles) {
			if (selectedCategory === article.getAttribute('data-category')) {
				article.style.display = 'block';
			} else {
				article.style.display = 'none';
			}
		}

		if (productsButton.textContent === 'Voir moins') {
			productsButton.textContent = 'Voir tous les produits';
		}
	});
}

displayAllProducts();

showProductsByCategory();
