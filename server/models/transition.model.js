const mongoose = require("mongoose");

const TransitionSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "States",
    },
    to: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "States",
      },
    ],
    input: {
      type: String,
    },
    fa_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FAs",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transitions", TransitionSchema);
