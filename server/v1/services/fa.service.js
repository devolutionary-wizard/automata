const { FA, State, Transition } = require("../../core/index");

//Create data
async function Create(data) {
  try {
    const newFA = new FA(data);
    const result = await newFA.save();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

//Get all data
async function find() {
  try {
    const getFAs = await FA.find();
    return getFAs;
  } catch (e) {
    throw new Error(e);
  }
}

//Find one
async function findOne(id) {
  try {
    const getFA = await FA.findOne(id);
    return getFA;
  } catch (e) {
    throw new Error(e);
  }
}

//Query
async function findQuery(query) {
  try {
    const queryFA = await FA.find(query);
    return queryFA;
  } catch (e) {
    throw new Error(e);
  }
}

//Update
async function Update(id, data) {
  try {
    const updateFA = await FA.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    return updateFA;
  } catch (e) {
    throw new Error(e);
  }
}

//Delete
async function Delete(id) {
  try {
    const deleteFA = await FA.findByIdAndDelete(id);
    return deleteFA;
  } catch (e) {
    throw new Error(e);
  }
}

async function find_FA_datas() {
  let getFAs = await FA.find();
  for (let i = 0; i < getFAs.length; i++) {
    let state_datas = await State.find({ fa_id: getFAs[i]._id });
    let transition_datas = await Transition.find({ fa_id: getFAs[i]._id })
      .populate("to", ["name"])
      .populate("from", ["name"]);
    const state = [];
    for (let j = 0; j < state_datas.length; j++) {
      state[j] = state_datas[j].name;
      if (state_datas[j].is_start === true) {
        getFAs[i].start_state = state_datas[j].name;
      }
      if (state_datas[j].is_final === true) {
        getFAs[i].final_state = state_datas[j].name;
      }
    }
    getFAs[i].states = state.join(",");
    getFAs[i].transitions = transition_datas;
  }

  let All = [];
  for (let i = 0; i < getFAs.length; i++) {
    All[i] = {};
    All[i].id = getFAs[i]._id;
    All[i].symbols = getFAs[i].symbols;
    All[i].states = getFAs[i].states;
    All[i].start_state = getFAs[i].start_state;
    All[i].final_state = getFAs[i].final_state;
    All[i].transitions = getFAs[i].transitions;
  }

  // console.log(All);
  return All;
}

module.exports.Create = Create;
module.exports.find = find;
module.exports.findOne = findOne;
module.exports.Delete = Delete;
module.exports.Update = Update;
module.exports.findQuery = findQuery;
module.exports.find_FA_datas = find_FA_datas;
