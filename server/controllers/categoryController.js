const models = require("../models");

const Category = models.category;

exports.findAll = (req, res) => {
    Category.findAll({
        
    }).then( (data) => {
      if (data === null || data === undefined) {
        return res.status(404).json({
          ok: false,
          mensaje: "No hay informacion de categorias",
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