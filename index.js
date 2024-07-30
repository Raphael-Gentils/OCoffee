// variables d'environnement
require('dotenv').config();

// Sécurisation des chemins
const path = require('path');

// Serveur express
const express = require('express');

const app = express();

const router = require('./src/routers');

// Configuration moteur de templates
app.set('view engine', 'ejs');
// Configuration répertoire views
const securedPathToViews = path.join(__dirname, 'src/views');
app.set('views', securedPathToViews);
// configuration répertoire static
const securedPathToAssets = path.join(__dirname, 'public');
app.set(express.static(securedPathToAssets));

app.use(router);

// Last middleware 404
const notFound = require('src/middlewares/404.js');

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${port}`);
});
