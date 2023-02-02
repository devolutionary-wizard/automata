const { FA, State, Transition, Transition_table } = require("../../core/index");
const _ = require("lodash");

// Find one
async function accept_string_service(data) {
  try {
    // 0 for rejected
    // 1 for accepted
    // 2 string not included

    // Get FA data
    const fa_data = await FA.findOne({ _id: data.fa_id });
    const state_datas = await State.find({ fa_id: data.fa_id });
    const transition_datas = await Transition.find({ fa_id: data.fa_id })
      .populate("to", ["name", "is_start", "is_final", "is_dead"])
      .populate("from", ["name", "is_start", "is_final", "is_dead"]);
    const transition_table_data = await Transition_table.find({
      fa_id: data.fa_id,
    });

    const symbols = fa_data.symbols.split(",");
    const string = data.string.split("");

    // check if string is included
    const contain = string.every((element) => {
      return symbols.includes(element);
    });
    if (!contain) {
      return 2;
    }

    let current_state = "";
    let current_transition = {};
    let start_state = _.filter(transition_datas, ["from.is_start", true]);

    start_state = _.filter(start_state, ["input", string[0]]);

    current_state = start_state[0].to[0].name;
    for (let i = 1; i < string.length; i++) {
      current_transition = _.filter(transition_datas, function (obj) {
        if (obj.input === string[i] && obj.from.name === current_state) {
          return obj;
        }
      });
      current_state = current_transition[0].to[0].name;

      let check = _.find(state_datas, ["name", current_state]);
      if (check.is_dead === true) {
        return 0;
      }
    }

    let check_fa = _.find(state_datas, ["name", current_state]);
    if (check_fa.is_final === true) {
      return 1;
    } else {
      return 0;
    }
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = { accept_string_service };
