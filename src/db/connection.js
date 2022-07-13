require("dotenv").config();
const {Sequelize} = require ("sequelize");

console.log ("succesfully connected");
exports.sequelize = new Sequelize(process.env.DATABASE_URL);