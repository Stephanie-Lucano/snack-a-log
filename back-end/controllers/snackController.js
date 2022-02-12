const express = require("express");
const snacks = express();
const { 
  getAllSnacks, 
  getSnack,
  deleteSnack,
  updateSnack,
  postSnack
} = require("../queries/snacks");

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

snacks.delete("/:id", async(request, response) => {
  console.log("DELETE request to /snacks/:id")
  const deleteOne = await deleteSnack(request.params.id)
  response.status(200).json(deleteOne)
})

snacks.put("/:id", async (request, response) => {
  console.log("UPDATE request to /snacks/:id")
  const update = await updateSnack(request.params.id, request.body)
  response.status(200).json(update)
})

snacks.post("/", async (request, response) => {
  console.log("POST request to /snacks")
  const post = await postSnack(request.body)
  response.status(200).json(post)
})

module.exports = snacks;
