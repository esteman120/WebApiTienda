const models = require("../models");

const Product = models.product;

exports.findAll = (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Product.findAndCountAll({
    limit: limite,
    offset: desde,
    include: [
      {
        model: models.category,
        attributes: ["id", "nameCategory"],       
      },
    ],
  })
    .then((data) => {
      if (data === null || data === undefined) {
        return res.status(404).json({
          ok: false,
          mensaje: "No hay informacion de productos",
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
        data: [],
      });
    });
};

exports.FindProductsXCategory = (req, res) => {
  let idCategory = req.params.id;

  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Product.findAndCountAll({
    limit: limite,
    offset: desde,    
    include: [
      {
        model: models.category,
        attributes: ["id", "nameCategory"],
        where: {
          id: idCategory,
        },
      },
    ],
  })
    .then((data) => {
      if (data === null || data === undefined) {
        return res.status(404).json({
          ok: false,
          mensaje: "No hay informacion de productos",
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
        data: [],
      });
    });
};
