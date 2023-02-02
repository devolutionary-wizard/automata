const route = require("express").Router();
const { convert } = require("../controllers/convert.controller");

//get FA
route.get("/:id", convert);

module.exports = route;
