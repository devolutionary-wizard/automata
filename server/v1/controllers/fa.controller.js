const {
  findByIdAndDelete,
  findOneAndUpdate,
  error,
  FA,
  User,
} = require("../../core/index");
const {
  Create,
  find,
  findOne,
  Delete,
  Update,
  find_FA_datas,
} = require("../services/fa.service");

//Add FA
async function addFA(req, res, next) {
  try {
    const result = await Create(req.body);
    res.send({
      message: "Created FA Successfully!",
      payload: result,
    });
  } catch (err) {
    next(new error.BadRequest(err));
  }
}

//Get one FA
async function getFA(req, res, next) {
  try {
    const getFA = await findOne({ _id: req.params.id });
    res.send({
      message: "Get FA successfully!",
      payload: getFA,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Get all FA
async function getFAs(req, res, next) {
  try {
    const getFAs = await find();
    res.send({
      message: "Get FAs successfully!",
      payload: getFAs,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Update FA
async function updateFA(req, res, next) {
  try {
    const updateFA = await Update(req.params.id, req.body);
    res.send({
      message: "The FA has been update",
      payload: updateFA,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Delete FA
async function deleteFA(req, res, next) {
  try {
    const id = req.params.id;
    const deleteFA = await Delete(id);
    res.send({
      message: "Delete FA successfully!",
      payload: deleteFA,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

//Get all FA
async function getFA_Datas(req, res, next) {
  try {
    const getFAs = await find_FA_datas();
    console.log(getFAs);
    res.send({
      message: "Get FA Data successfully!",
      payload: getFAs,
    });
  } catch (err) {
    next(new error.NotFoundError(err));
  }
}

module.exports = {
  addFA,
  getFAs,
  getFA,
  deleteFA,
  updateFA,
  getFA_Datas,
};
