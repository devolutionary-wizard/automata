const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  State,
  User,
} = require("../../core/index");
const {
  Create,
  find,
  findOne,
  Delete,
  Update,
} = require("../services/state.service");

//Add State
async function addState(req, res, next) {
  try {
    const result = await Create(req.body);
    res.send({
      message: "Created State Successfully!",
      payload: result,
    });
  } catch (err) {
    next(new error.BadRequest(err));
  }
}

//Get one State
async function getState(req, res, next) {
  try {
    const getState = await findOne({ _id: req.params.id });
    res.send({
      message: "Get State successfully!",
      payload: getState,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Get all State
async function getStates(req, res, next) {
  try {
    const getStates = await find(req.query);
    res.send({
      message: "Get States successfully!",
      payload: getStates,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Update State
async function updateState(req, res, next) {
  try {
    const updateState = await Update(req.params.id, req.body);
    res.send({
      message: "The State has been update",
      payload: updateState,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Delete State
async function deleteState(req, res, next) {
  try {
    const id = req.params.id;
    const deleteState = await Delete(id);
    res.send({
      message: "Delete State successfully!",
      payload: deleteState,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  addState,
  getStates,
  getState,
  deleteState,
  updateState,
};
