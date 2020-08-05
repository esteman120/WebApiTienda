module.exports = function(app) {
    var client = require('../controllers/clientController');
    var router = require('express').Router();
    router.get('/', client.);
    router.post('/crear', verificaToken, clientes.CrearClientes);
    router.post('/actualizar', verificaToken, clientes.ActualizarClientes);
    router.post('/eliminar', verificaToken, clientes.EliminarClientes);

    app.use('/api/clientes', router);
};