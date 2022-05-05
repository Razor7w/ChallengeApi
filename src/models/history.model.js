const { Schema, model } = require("mongoose");

const historySchema = new Schema(
  {
    date: Date,
    user: String,
    amount: Number,
    dateSelected: Date,
    currencyValue: Number,
    conversionAmount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("History", historySchema);
