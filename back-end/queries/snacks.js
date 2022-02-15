const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const getAll = await db.any("SELECT * FROM snacks");
    return getAll;
  } catch (error) {
    return error;
  }
};

const getSnack = async (id) => {
  try {
    const getOne = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return getOne;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deleteOne = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );
    return deleteOne;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snacks) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snacks;
    const update = await db.one(
      "UPDATE snacks SET name=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6, image=$7 WHERE id=$1 RETURNING *",
      [id, name, fiber, protein, added_sugar, is_healthy, image]
    );
    return update;
  } catch (error) {
    return error;
  }
};

const postSnack = async (snacks) => {
  try {
    const { name, fiber, protein, added_sugar, is_healthy, image } = snacks;
    
    const newName = name.toLowerCase().split(" ").map((word) => { 
        return word.length <= 2 
        ? word 
        : word[0].toUpperCase() + word.slice(1)
      }).join(" ")
    
    const post = await db.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [newName, fiber, protein, added_sugar, is_healthy, image || "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"]
    );
    return post;
  } catch (error) {
    return error;
  }
};

console.log(postSnack({
  "id": 1,
  "name": "banana",
  "name": "spiders on a log",
  "name": "COMBOS",
  "name": "FLAMIN' hot Cheetoes", 
  "fiber": 20,
  "protein": 10,
  "added_sugar": 0,
  "is_healthy": true,
  "image": null
}))

module.exports = {
  getAllSnacks,
  getSnack,
  deleteSnack,
  updateSnack,
  postSnack,
};
