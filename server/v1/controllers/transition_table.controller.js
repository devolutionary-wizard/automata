const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  Transition_table,
  User,
} = require("../../core/index");
const {
  Create,
  find,
  findOne,
  Delete,
  Update,
} = require("../services/transition_table.service");

//Add Transition_table
async function addTransition_table(req, res, next) {
  try {
    const result = await Create(req.body);
    res.send({
      message: "Created Transition_table Successfully!",
      payload: result,
    });
  } catch (err) {
    next(new error.BadRequest(err));
  }
}

//Get one Transition_table
async function getTransition_table(req, res, next) {
  try {
    const getTransition_table = await findOne({ _id: req.params.id });
    res.send({
      message: "Get Transition_table successfully!",
      payload: getTransition_table,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Get all Transition_table
async function getTransition_tables(req, res, next) {
  try {
    const getTransition_tables = await find();
    res.send({
      message: "Get Transition_tables successfully!",
      payload: getTransition_tables,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Update Transition_table
async function updateTransition_table(req, res, next) {
  try {
    const updateTransition_table = await Update(req.params.id, req.body);
    res.send({
      message: "The Transition_table has been update",
      payload: updateTransition_table,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Delete Transition_table
async function deleteTransition_table(req, res, next) {
  try {
    const id = req.params.id;
    const deleteTransition_table = await Delete(id);
    res.send({
      message: "Delete Transition_table successfully!",
      payload: deleteTransition_table,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  addTransition_table,
  getTransition_tables,
  getTransition_table,
  deleteTransition_table,
  updateTransition_table,
};
