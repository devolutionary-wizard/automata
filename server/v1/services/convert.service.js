const { FA, State, Transition, Transition_table } = require("../../core/index");
const _ = require("lodash");

// Find one
async function convert_service(id) {
  try {
    // Get FA data
    const fa_data = await FA.findOne(id);
    const state_datas = await State.find({ fa_id: id });
    const transition_datas = await Transition.find({ fa_id: id })
      .populate("to", ["name"])
      .populate("from", ["name"]);

    const symbols = fa_data.symbols.split(",");

    let new_state_data = [];
    let new_trans = [];

    // second condition
    for (let i = 0; i < state_datas.length; i++) {
      let transition_datas_by_state = _.filter(transition_datas, [
        "from.name",
        state_datas[i].name,
      ]);
      if (transition_datas_by_state.length > 0) {
        for (let j = 0; j < symbols.length; j++) {
          const check = _.filter(transition_datas_by_state, [
            "input",
            symbols[j],
          ]);
          if (check[0].to.length > 1) {
            const new_state = {};
            const new_state_name = [];
            for (let k = 0; k < check[0].to.length; k++) {
              new_state_name[k] = check[0].to[k].name;
              let transition_datas_by_state = _.filter(transition_datas, [
                "from.name",
                check[0].to[k].name,
              ]);
              new_trans.push(transition_datas_by_state);
            }
            new_state.name = new_state_name.join("");
            new_state_data.push(new_state);
          }
        }
      }
    }

    console.log(new_state_data);
    console.log(new_trans);

    return 0;
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = { convert_service };
