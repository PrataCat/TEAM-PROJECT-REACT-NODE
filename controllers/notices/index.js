const getNotices = require("./getNotices");
const getNoticeById = require("./getNoticeById");
const addToFavorites = require("./addToFavorites");
const getFavorites = require("./getFavorites");
const removeFromFavorites = require("./removeFromFavorites");
const addNotice = require("./addNotice");
const getUserNotices = require("./getUserNotices");
const removeNotice = require('./removeNotice')

module.exports = {
  getNotices,
  getNoticeById,
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  addNotice,
  getUserNotices,
  removeNotice
};
