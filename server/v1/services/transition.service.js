const { Transition } = require("../../core/index");

//Create data
async function Create(data) {
  try {
    const newTransition = new Transition(data);
    const result = await newTransition.save();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

//Get all data
async function find(query) {
  try {
    const getTransitions = await Transition.find(query)
      .populate("to", ["name", "is_start", "is_final", "is_dead"])
      .populate("from", ["name", "is_start", "is_final", "is_dead"]);
    return getTransitions;
  } catch (e) {
    throw new Error(e);
  }
}

//Find one
async function findOne(id) {
  try {
    const getTransition = await Transition.findOne(id);
    return getTransition;
  } catch (e) {
    throw new Error(e);
  }
}

//Query
async function findQuery(query) {
  try {
    const queryTransition = await Transition.find(query);
    return queryTransition;
  } catch (e) {
    throw new Error(e);
  }
}

//Update
async function Update(id, data) {
  try {
    const updateTransition = await Transition.findByIdAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );
    return updateTransition;
  } catch (e) {
    throw new Error(e);
  }
}

//Delete
async function Delete(id) {
  try {
    const deleteTransition = await Transition.findByIdAndDelete(id);
    return deleteTransition;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports.Create = Create;
module.exports.find = find;
module.exports.findOne = findOne;
module.exports.Delete = Delete;
module.exports.Update = Update;
module.exports.findQuery = findQuery;
