const route = require("express").Router();
const { accept_string } = require("../controllers/accept_string.controller");

//get FA
route.post("/", accept_string);

module.exports = route;
