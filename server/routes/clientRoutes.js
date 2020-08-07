module.exports = function(app) {
    var client = require('../controllers/clientController.js');
    var router = require('express').Router();
    router.post('/create', client.CreateClient);
    router.get('/', client.GetClient);    

    app.use('/api/client', router);
};