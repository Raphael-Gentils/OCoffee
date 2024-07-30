const catalogButton = document.getElementById('catalog-button');
const availabilityStatus = document.getElementById('availability');

function showAllProductsOnCatalog() {
	if (catalogButton) {
		catalogButton.addEventListener('click', () => {
			// Enregistrer une variable dans LocalStorage pour l'utiliser dans une autre page
			localStorage.setItem('showAllProducts', 'true');
		});
	}
}

showAllProductsOnCatalog();

function displayAvailability() {
	if (availabilityStatus && window.product) {
		const availability = window.product.disponibility;
		availabilityStatus.classList.add(availability ? 'true' : 'false');
		availabilityStatus.textContent = availability
			? 'Disponible'
			: 'Indisponible';
	}
}

displayAvailability();
