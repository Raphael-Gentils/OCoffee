const dataMapper = require('../database/dataMapper');

const mainController = {
	homePage: async (req, res) => {
		const latestProducts = await dataMapper.getLatestProducts();

		res.render('home', { latestProducts });
	},

	catalogPage: async (req, res) => {
		const products = await dataMapper.getAllProducts();
		const categories = await dataMapper.getCategories();
		const productsByCategory = await dataMapper.getProductsByCategory();

		res.render('catalog', { products, categories });
	},

	productPage: async (req, res, next) => {
		const id = req.params.id;

		const product = await dataMapper.getProductById(id);

		if (!product) {
			return next();
		}

		res.render('product', { product });
	},
};

module.exports = mainController;
