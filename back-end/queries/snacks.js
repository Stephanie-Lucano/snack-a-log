const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const getAll = await db.any("SELECT * FROM snacks");
    return getAll;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSnacks };
