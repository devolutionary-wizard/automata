const route = require("express").Router();
const {
  getTransitions,
  getTransition,
  addTransition,
  deleteTransition,
  updateTransition,
} = require("../controllers/transition.controller");

//get Transitions
route.get("/", getTransitions);

//get Transition
route.get("/:id", getTransition);

//add Transitions
route.post("/", addTransition);

//delete Transition
route.delete("/:id", deleteTransition);

//update Transition
route.put("/:id", updateTransition);

module.exports = route;
