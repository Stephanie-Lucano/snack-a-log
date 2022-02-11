const express = require("express");
const snacks = express();
const { getAllSnacks, getSnack } = require("../queries/snacks");

snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  response.status(200).json(allSnacks);
});

snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const getOne = await getSnack(request.params.id);
  response.status(200).json(getOne);
});

module.exports = snacks;
