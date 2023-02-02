const { FA, State, Transition, Transition_table } = require("../../core/index");
const _ = require("lodash");

// Find one
async function check_fa_service(id) {
  try {
    // 0 for dfa
    // 1 for nfa

    // Get FA data
    const fa_data = await FA.findOne(id);
    const state_datas = await State.find({ fa_id: id });
    const transition_datas = await Transition.find({ fa_id: id })
      .populate("to", ["name"])
      .populate("from", ["name"]);

    const symbols = fa_data.symbols.split(",");

    // first condition
    if (transition_datas.length !== state_datas.length * symbols.length) {
      return 1;
    }

    // second condition
    for (let i = 0; i < state_datas.length; i++) {
      let transition_datas_by_state = _.filter(transition_datas, [
        "from.name",
        state_datas[i].name,
      ]);
      for (let j = 0; j < symbols.length; j++) {
        const check = _.filter(transition_datas_by_state, [
          "input",
          symbols[j],
        ]);
        if (typeof check === "undefined") {
          return 1;
        } else {
          if (check.length >= 2 || check.to.length >= 2) {
            return 1;
          }
        }
      }
    }

    return 0;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = { check_fa_service };
