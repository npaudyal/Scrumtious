const mongoose = require("mongoose");
const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Ingredient = mongoose.model("ingredient", ingredientSchema);
module.exports = Ingridient;

