const bcrypt = require("bcrypt");

const createHashPass = async (password) => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

const comparePass = async (password, hashpass) => {
  return await bcrypt.compare(password, hashpass);
};

module.exports = { createHashPass, comparePass };
