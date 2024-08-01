const client = require('./client');

const dataMapper = {
	getLatestProducts: async () => {
		const query = 'SELECT * FROM coffee ORDER BY random() LIMIT 3;';

		const { rows } = await client.query(query);

		if (!rows.length) {
			return null;
		}

		return rows;
	},

	getAllProducts: async () => {
		const query = 'SELECT * FROM coffee;';

		const { rows } = await client.query(query);

		return rows;
	},

	getCategories: async () => {
		const query = 'SELECT type, COUNT(type) FROM coffee GROUP BY type;';

		const { rows } = await client.query(query);

		return rows;
	},

	getProductById: async (id) => {
		const query = {
			text: 'SELECT * FROM coffee WHERE id = $1;',
			values: [id],
		};

		const { rows } = await client.query(query);

		return rows[0];
	},
};

module.exports = dataMapper;
