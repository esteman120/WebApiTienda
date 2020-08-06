const models = require('../models');

const Product = models.product;

exports.findAll = () => {
    return Product.findAll({ })
    .then(function(data) {
        if (data === null || data === undefined) {
            return res.status(404).json({
                ok: false,
                mensaje: "No hay informacion de clientes",
                data: []
            });
        }
        else { 

            const respuesta = {
                ok: true,
                data,
                mensaje: ""
            };
            res.status(200).send(respuesta);

        }

    });
};