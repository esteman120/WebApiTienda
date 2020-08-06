const models = require("../models");

const Product = models.product;

exports.findAll = (req, res) => {
    console.log("Entro producto controller");
    Product.findAll({
        include: [{
            model: models.category           
        }]
    }).then( (data) => {
      if (data === null || data === undefined) {
        return res.status(404).json({
          ok: false,
          mensaje: "No hay informacion de clientes",
          data: [],
        });
      } else {
        const respuesta = {
          ok: true,
          data,
          mensaje: "",
        };
        return res.status(200).send(respuesta);
      }
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            mensaje: "Internal server error",
            data: []
        });
    });
  
};
