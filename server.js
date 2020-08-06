// require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require("cors"),
    bodyParser = require('body-parser');

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//BD
const db = require('./server/models');
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

require('./server/routes/productRoutes.js')(app);
// require('./api/routes/productRoutes.js')(app);
// require('./api/routes/categoryRoutes.js')(app);
// require('./api/routes/clientRoutes.js')(app);


app.listen(port);

