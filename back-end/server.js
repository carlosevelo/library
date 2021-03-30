const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false,
}));

// parse application/json
app.use(bodyParser.json());

// connect to the db
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// SCHEMA
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publication: String,
  genre: String,
  pages: Number,
  isRead: Boolean,
});
const genreSchema = new mongoose.Schema({
  name: String,
});

// MODELS
const Book = mongoose.model('Book', bookSchema);
const Genre = mongoose.model('Genre', genreSchema);

// REQUESTS


//LISTEN
app.listen(3000, () => console.log('Server listening on port 3000!'));