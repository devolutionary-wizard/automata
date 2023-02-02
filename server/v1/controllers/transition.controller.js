const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  Transition,
  User,
} = require("../../core/index");
const {
  Create,
  find,
  findOne,
  Delete,
  Update,
} = require("../services/transition.service");

//Add Transition
async function addTransition(req, res, next) {
  try {
    const result = await Create(req.body);
    res.send({
      message: "Created Transition Successfully!",
      payload: result,
    });
  } catch (err) {
    next(new error.BadRequest(err));
  }
}

//Get one Transition
async function getTransition(req, res, next) {
  try {
    const getTransition = await findOne({ _id: req.params.id });
    res.send({
      message: "Get Transition successfully!",
      payload: getTransition,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Get all Transition
async function getTransitions(req, res, next) {
  try {
    const getTransitions = await find(req.query);
    res.send({
      message: "Get Transitions successfully!",
      payload: getTransitions,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Update Transition
async function updateTransition(req, res, next) {
  try {
    const updateTransition = await Update(req.params.id, req.body);
    res.send({
      message: "The Transition has been update",
      payload: updateTransition,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Delete Transition
async function deleteTransition(req, res, next) {
  try {
    const id = req.params.id;
    const deleteTransition = await Delete(id);
    res.send({
      message: "Delete Transition successfully!",
      payload: deleteTransition,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  addTransition,
  getTransitions,
  getTransition,
  deleteTransition,
  updateTransition,
};
