const mongoose = require("mongoose");

const FA_Schema = new mongoose.Schema(
  {
    symbols: {
      type: String,
    },
    tansaction_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transition_tables",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FAs", FA_Schema);
