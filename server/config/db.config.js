module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b9fa16c5be5f43",
    PASSWORD: "6cddc50b",
    DB: "heroku_4cc4a5859e80daa",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };