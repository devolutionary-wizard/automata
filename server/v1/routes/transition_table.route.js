const route = require("express").Router();
const {
  getTransition_tables,
  getTransition_table,
  addTransition_table,
  deleteTransition_table,
  updateTransition_table,
} = require("../controllers/transition_table.controller");

//get Transition_tables
route.get("/", getTransition_tables);

//get Transition_table
route.get("/:id", getTransition_table);

//add Transition_tables
route.post("/", addTransition_table);

//delete Transition_table
route.delete("/:id", deleteTransition_table);

//update Transition_table
route.put("/:id", updateTransition_table);

module.exports = route;
