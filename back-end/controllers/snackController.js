const express = require("express");
const snacks = express();
const { getAllSnacks } = require("../queries/snacks");

snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  response.status(200).json(await getAllSnacks());
});

module.exports = snacks;
