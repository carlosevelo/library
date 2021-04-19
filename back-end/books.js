const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;
const genre = require("./genre.js");
const Genre = genre.model;

// SCHEMA
const bookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: String,
  author: String,
  published: String,
  genre: {
    type: mongoose.Schema.ObjectId,
    ref: 'Genre'
  },
  pages: Number,
  isRead: Boolean,
  review: String,
});

// MODEL
const Book = mongoose.model('Book', bookSchema);

// API ENDPOINTS
//Create book
router.post('/', validUser, async (req, res) => {
  let genre = await Genre.findOne({name: req.body.genre});
  if(!genre) {
    genre = new Genre({
      name: req.body.genre,
    })
    await genre.save();
  }
  const book = new Book({
    user: req.user,
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: genre,
    pages: req.body.pages,
    isRead: req.body.isRead,
    review: req.body.review,
  });
  try {
    await book.save();
    res.send(book);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get my books
router.get('/', validUser, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user
    }).populate('genre');
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get my unread books
router.get('/unread', validUser, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user,
      isRead: false
    }).populate('genre');
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get my read books
router.get('/read', validUser, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user,
      isRead: true
    }).populate('genre');
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get my reviewed books
router.get('/reviewed', validUser, async (req, res) => {
  try {
    let books = await Book.find({
      user: req.user,
      review: {"$exists" : true, "$ne" : ""}
    }).populate('genre');
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Change isRead
router.put('/:bookId', validUser, async (req, res) => {
  try {
    let book = await Book.findOne({_id: req.params.bookId});
    if (!book) {
      res.sendStatus(404);
      return;
    }
    book.isRead = req.body.isRead;
    await book.save();
    res.send(book);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Delete book
router.delete('/:bookId', validUser, async (req, res) => {
  try {
    let book = await Book.findOne({_id: req.params.bookId});
    if(!book) {
      res.sendStatus(404);
      return;
    }
    await book.delete();
    res.sendStatus(200);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = {
  model: Book,
  routes: router,
}