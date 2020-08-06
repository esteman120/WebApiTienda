const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require('./categoryModule.js')(sequelize, Sequelize);
db.client = require('./clientModule.js')(sequelize, Sequelize);
db.product = require('./productModule.js')(sequelize, Sequelize);
db.categoryproduct = require('./categoryProducts')(sequelize, Sequelize);

// //relacion entre categoria y producto
db.category.belongsToMany(db.product, { through: db.categoryproduct });
db.product.belongsToMany(db.category, { through: db.categoryproduct });

module.exports = db;