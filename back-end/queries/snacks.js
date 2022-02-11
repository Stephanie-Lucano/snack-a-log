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
    const deleteOne = await db.one("DELETE FROM snacks WHERE id=$1 RETURNING *", id)
    return deleteOne
  } catch (error) {
    return error
  }
}

module.exports = {
  getAllSnacks,
  getSnack,
  deleteSnack
};
