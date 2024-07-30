const { error } = require('console');
const dataMapper = require('../database/dataMapper');

const mainController = {
	async homePage(req, res) {
		try {
			const newProducts = await dataMapper.getNewProducts();

			res.render('home', { newProducts });
		} catch (error) {
			console.log('NAME', error.name);
			console.log('CAUSE', error.cause);
			console.log('STACK', error.stack);

			res.send(error.message);
		}
	},

	async catalogPage(req, res) {
		try {
			const products = await dataMapper.getAllProducts();

			res.render('catalog', { products });
		} catch (error) {
			console.log('NAME', error.name);
			console.log('CAUSE', error.cause);
			console.log('STACK', error.stack);

			res.send(error.message);
		}
	},

	async productPage(req, res, next) {
		const id = Number.parseInt(req.params.id, 10);

		if (Number.isNaN(id)) {
			return next();
		}

		try {
			const product = await dataMapper.getProductById(id);
			res.render('product', { product });
		} catch (error) {
			console.log('NAME', error.name);
			console.log('CAUSE', error.cause);
			console.log('STACK', error.stack);

			res.send(error.message);
		}
	},
};

module.exports = mainController;
