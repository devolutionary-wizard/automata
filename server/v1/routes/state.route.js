const route = require("express").Router();
const {
  getStates,
  getState,
  addState,
  deleteState,
  updateState,
} = require("../controllers/state.controller");

//get States
route.get("/", getStates);

//get State
route.get("/:id", getState);

//add States
route.post("/", addState);

//delete State
route.delete("/:id", deleteState);

//update State
route.put("/:id", updateState);

module.exports = route;
