const express = require("express");
const router = new express.Router();
const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find().populate({
      path: "ingredients.ingredient",
      select: "name price"
    });
    res.send(recipes);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(400).send({
        errMessage: "No such recipe found"
      });
    }
    await recipe
      .populate({
        path: "ingredients.ingredient",
        select: "name price"
      })
      .execPopulate();

    res.send(recipe);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
