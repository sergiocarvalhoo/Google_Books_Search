const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./src/database/database.sqlite",
});

module.exports = sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.comment = require("../models/comment")(sequelize, Sequelize);

db.sync = async () => {
  await sequelize.sync();
};

module.exports = db;
