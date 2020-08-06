module.exports = function(app) {
    var Product = require('../controllers/productController.js');
    var router = require('express').Router();
    router.get('/', Product.findAll);
}