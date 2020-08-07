const models = require("../models");

const Client = models.client;

exports.CreateClient = (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  if (!email) {
    res.status(400).send({
      ok: false,
      mensaje: "Correo no puede ser nulo",
      data: [],
    });
    return;
  }

  Client.findOne({
    where: { email: email },
  })
    .then(async (data) => {
      console.log("data " + data);
      if (data != null) {
        const respuesta = {
          ok: true,
          data,
          mensaje: "El usuario ya se encuentra registrado con ese email",
        };
        return res.status(200).send(respuesta);
      } else {
        const ObjClient = {
          name: req.body.name,
          numId: req.body.numId,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
          email: email,
        };

        let response = await createClient(ObjClient);

        if (response) {
          const respuestaSave = {
            ok: true,
            data: response.data,
            mensaje: "",
          };
          return res.status(200).send(respuestaSave);
        } else {
          return res.status(500).json({
            ok: false,
            mensaje: "Internal server error",
            data: [],
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        ok: false,
        mensaje: "Internal server error",
        data: [],
      });
    });
};

async function createClient(ObjClient) {
  let respuesta;
  await Client.create(ObjClient)
    .then((data) => {
      respuesta = {
        ok: true,
        data,
      };
    })
    .catch((error) => {
      console.log(error);
      respuesta = {
        ok: false,
      };
    });

  return respuesta;
}

exports.GetClient = (req, res) => {
  let email = req.body.email;
  if (!email) {
    res.status(400).send({
      ok: false,
      mensaje: "Correo no puede ser nulo",
      data: [],
    });
    return;
  }

  Client.findOne({
    where: { email: email },
  })
    .then(async (data) => {
      console.log("data " + data);
      if (data != null) {
        const respuesta = {
          ok: true,
          data,
          mensaje: "",
        };
        return res.status(200).send(respuesta);
      } else {
        const respuesta = {
            ok: true,
            data: [],
            mensaje: "",
          };
          return res.status(200).send(respuesta);
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        ok: false,
        mensaje: "Internal server error",
        data: [],
      });
    });
};
