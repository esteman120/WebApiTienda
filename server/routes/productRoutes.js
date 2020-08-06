module.exports = function(app) {
    var Product = require('../controllers/productController.js');
    console.log("ProductoRoute "+Product);
    var router = require('express').Router();
    router.get('/', Product.findAll)

    app.use('/api/products', router);
}