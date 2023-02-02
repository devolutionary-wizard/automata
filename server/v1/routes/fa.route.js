const route = require("express").Router();
const {
  getFAs,
  getFA,
  addFA,
  deleteFA,
  updateFA,
  getFA_Datas,
} = require("../controllers/fa.controller");

//get FAs
route.get("/", getFAs);

//get FA
// route.get("/:id", getFA);

//add FAs
route.post("/", addFA);

//delete FA
route.delete("/:id", deleteFA);

//update FA
route.put("/:id", updateFA);

//get FAs
route.get("/getAll", getFA_Datas);

module.exports = route;
