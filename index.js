// variables d'environnement
require('dotenv').config();

// Serveur express
const express = require('express');
const app = express();

// Sécurisation des chemins
const path = require('path');

const {
	notFound,
	errorHandler,
} = require('./src/middlewares/handlers/errorHandlers');

// const map = require('./src/middlewares/map');

const router = require('./src/routers/index');

// Configuration moteur de templates
app.set('view engine', 'ejs');

// Configuration répertoire views
const securedPathToViews = path.join(__dirname, 'views');
app.set('views', securedPathToViews);

// configuration répertoire static
const securedPathToAssets = path.join(__dirname, 'public');
app.use(express.static(securedPathToAssets));

app.use(router);

// app.use(map);
// 404
app.use(notFound);
// Gestion d'erreurs
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on ${process.env.BASE_URL}:${port}`);
});
