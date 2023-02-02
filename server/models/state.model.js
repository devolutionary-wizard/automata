const mongoose = require("mongoose");

const StatesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    is_start: {
      type: Boolean,
    },
    is_final: {
      type: Boolean,
    },
    is_dead: {
      type: Boolean,
    },
    fa_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FAs",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("States", StatesSchema);
