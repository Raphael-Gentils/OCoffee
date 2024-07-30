const client = require('./client');

const dataMapper = {
	async getNewProducts() {
		const query = 'SELECT * FROM coffee ORDER BY random() LIMIT 3;';

		const newProducts = await client.query(query);

		return newProducts.rows;
	},

	async getAllProducts() {
		const query = 'SELECT * FROM coffee;';

		const products = await client.query(query);

		return products.rows;
	},

	async getProductById(id) {
		const query = {
			text: 'SELECT * FROM coffee WHERE id = $1;',
			values: [id],
		};

		const product = await client.query(query);

		return product.rows[0];
	},
};

module.exports = dataMapper;
