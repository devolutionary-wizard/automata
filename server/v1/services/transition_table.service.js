const { Transition_table } = require("../../core/index");

//Create data
async function Create(data) {
  try {
    const newTransition_table = new Transition_table(data);
    const result = await newTransition_table.save();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

//Get all data
async function find() {
  try {
    const getTransition_tables = await Transition_table.find();
    return getTransition_tables;
  } catch (e) {
    throw new Error(e);
  }
}

//Find one
async function findOne(id) {
  try {
    const getTransition_table = await Transition_table.findOne(id);
    return getTransition_table;
  } catch (e) {
    throw new Error(e);
  }
}

//Query
async function findQuery(query) {
  try {
    const queryTransition_table = await Transition_table.find(query);
    return queryTransition_table;
  } catch (e) {
    throw new Error(e);
  }
}

//Update
async function Update(id, data) {
  try {
    const updateTransition_table = await Transition_table.findByIdAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );
    return updateTransition_table;
  } catch (e) {
    throw new Error(e);
  }
}

//Delete
async function Delete(id) {
  try {
    const deleteTransition_table = await Transition_table.findByIdAndDelete(id);
    return deleteTransition_table;
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
