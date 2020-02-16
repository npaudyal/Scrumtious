const express = require("express");
const connectDB = require("./database/mongoose");
connectDB();
const userRouter = require("./routers/user");
const recipeRouter = require("./routers/recipe");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(recipeRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

