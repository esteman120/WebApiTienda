module.exports = function(app) {
    var Category = require('../controllers/categoryController.js');
    var router = require('express').Router();
    router.get('/', Category.findAll)

    app.use('/api/category', router);
}