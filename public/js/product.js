const catalogButton = document.getElementById('catalog-button');

function showAllProductsOnCatalog() {
	if (catalogButton) {
		catalogButton.addEventListener('click', () => {
			// Enregistrer une variable dans LocalStorage pour l'utiliser dans une autre page
			localStorage.setItem('showAllProducts', 'true');
		});
	}
}

showAllProductsOnCatalog();
