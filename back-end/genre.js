const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const genreSchema = new mongoose.Schema({
  name: String,
});

const Genre = mongoose.model('Genre', genreSchema);


module.exports = {
  model: Genre,
  routes: router,
}