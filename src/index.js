const express = require("express");
require("./database/mongoose");
const userRouter = require("./routers/user");
const recipeRouter = require("./routers/recipe");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/users", userRouter);
app.use("/recipes", recipeRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
