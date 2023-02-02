const route = require("express").Router();
const { check_fa } = require("../controllers/check_fa.controller");

//get FA
route.get("/:id", check_fa);

module.exports = route;
