const mongoose = require("mongoose");

const Transition_table_Schema = new mongoose.Schema(
  {
    transaction_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transactions",
      },
    ],
    fa_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FAs",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transition_tables", Transition_table_Schema);
