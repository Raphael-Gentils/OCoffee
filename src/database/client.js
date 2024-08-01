// * import de pg
const pg = require('pg');

// * récupère le client qui sert à se connecter
const { Client } = pg;

// * on dit au client comment se connecter avec notre variable d'environnement qui représent l'URL du serveur PostgreSQL
const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
