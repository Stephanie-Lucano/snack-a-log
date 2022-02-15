// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const snacksController = require("./controllers/snackController");

// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());

// MIDDLEWARE
app.use("/snacks", snacksController);

// ROUTES

app.get("/", (_, response) => {
  console.log("GET request to /");
  response.status(200).send("Get Snack'n at Snack-a-log!");
});

app.get("*", (_, response) => {
  response.status(404).send("Page not found");
});
// EXPORT
module.exports = app;
