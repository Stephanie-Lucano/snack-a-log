const express = require("express");
const snacks = express();
const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  updateSnack,
  postSnack,
} = require("../queries/snacks");

snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  allSnacks.length !== 0
    ? response.status(200).json({ success: true, payload: allSnacks })
    : response.status(404).json({ error: "error" });
});

snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const { id } = request.params;
  const getOne = await getSnack(id);
  console.log(getOne.id);
  if (getOne.id) {
    response.status(200).json({ success: true, payload: getOne });
  } else {
    response.status(404).json({ success: false, payload: "not found" });
  }
});

snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const deleteOne = await deleteSnack(request.params.id);
  deleteOne.id
    ? response.status(200).json({ success: true, payload: deleteOne })
    : response.status(404).json({ success: false, payload: "not found" });
});

snacks.put("/:id", async (request, response) => {
  console.log("UPDATE request to /snacks/:id");
  const update = await updateSnack(request.params.id, request.body);
  update.id
    ? response.status(200).json(update)
    : response.status(404).json({ error: "error" });
});

snacks.post("/", async (request, response) => {
  console.log("POST request to /snacks");
  const post = await postSnack(request.body);
  response.status(200).json({ success: true, payload: post });
});

module.exports = snacks;
