const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true,
    unqiue: true
  },
  description: {
    type: String,
    required: true
  },
  cookingTime: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  nutrients: [
    {
      calories: {
        type: Number
      },
      carbs: {
        type: String
      },

      protein: {
        type: Number
      },
      fat: {
        type: Number
      }
    }
  ],
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

const Recipe = mongoose.model("recipe", recipeSchema);
module.exports = Recipe;
