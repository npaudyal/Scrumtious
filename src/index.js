const express = require("express");
const connectDB = require("./database/mongoose");
connectDB();
const userRouter = require("./routers/user");
const recipeRouter = require("./routers/recipe");

const app = express();
const port = process.env.PORT;
const fs = require("fs");
const path = require("path");
app.use(express.json());
app.use(userRouter);
app.use(recipeRouter);

// const description =
//   "<ol><li>Place first five items into a blender and pulse a few times. Add the next berry and pulse 2-3 times. Repeat until all berries have been added, then blend on high until smooth.</li></ol>";
// let mama = description;

// if (description.includes("<ol>")) {
//   mama = mama.replace("<ol>", "");
// }
// if (description.includes("<li>")) {
//   mama = mama.replace("<li>", "");
// }
// if (description.includes("</li>")) {
//   mama = mama.replace("</ol>", "");
// }
// if (description.includes("</ol>")) {
//   mama = mama.replace("</li>", "");
// }
// console.log(mama);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

