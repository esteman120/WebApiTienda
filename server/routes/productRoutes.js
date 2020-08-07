module.exports = function(app) {
    var Product = require('../controllers/productController.js');
    var router = require('express').Router();
    router.get('/', Product.findAll)
    router.get('/productCategory/:id', Product.FindProductsXCategory)

    app.use('/api/products', router);
}