const express = require("express");
const snacks = express();
const { getAllSnacks } = require("../queries/snacks");

snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  response.status(200).json(allSnacks);
});

module.exports = snacks;
