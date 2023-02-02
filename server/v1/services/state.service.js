const { State } = require("../../core/index");

//Create data
async function Create(data) {
  try {
    const newState = new State(data);
    const result = await newState.save();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

//Get all data
async function find(query) {
  try {
    const getStates = await State.find(query);
    return getStates;
  } catch (e) {
    throw new Error(e);
  }
}

//Find one
async function findOne(id) {
  try {
    const getState = await State.findOne(id);
    return getState;
  } catch (e) {
    throw new Error(e);
  }
}

//Query
async function findQuery(query) {
  try {
    const queryState = await State.find(query);
    return queryState;
  } catch (e) {
    throw new Error(e);
  }
}

//Update
async function Update(id, data) {
  try {
    const updateState = await State.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    return updateState;
  } catch (e) {
    throw new Error(e);
  }
}

//Delete
async function Delete(id) {
  try {
    const deleteState = await State.findByIdAndDelete(id);
    return deleteState;
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
