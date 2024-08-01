const mainController = require('../controllers/mainController');
const { catchErrors } = require('../middlewares/handlers/errorHandlers');

const router = require('express').Router();

// page d'accueil
router.get('/', catchErrors(mainController.homePage));

// pages catalogue
router.get('/catalog', catchErrors(mainController.catalogPage));

// page produit
router.get('/product/:id(\\d+)', catchErrors(mainController.productPage));

module.exports = router;
