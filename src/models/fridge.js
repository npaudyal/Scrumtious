const mongoose = require("mongoose");
const fridgeSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: "ingredient"
      },
      amount: {
        unit: {
          type: String
        },
        value: {
          type: Number
        }
      }
    }
  ]
});

const Fridge = mongoose.model("fridge", fridgeSchema);
module.exports = Fridge;
