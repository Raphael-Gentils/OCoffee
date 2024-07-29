// variables d'environnement
require('dotenv').config();

// serveur
const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${port}`);
});
