const router = require('express').Router();

const mainController = require('../controllers/mainController');

// page d'accueil
router.get('/', mainController.homePage);

// page catalogue
router.get('/catalog', mainController.catalogPage);

// page produit
router.get('/product/:id', mainController.productPage);

module.exports = router;
