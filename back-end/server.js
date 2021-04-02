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
  published: String,
  genre: String,
  pages: Number,
  isRead: Boolean,
  review: String,
});
const genreSchema = new mongoose.Schema({
  name: String,
});

// MODELS
const Book = mongoose.model('Book', bookSchema);
const Genre = mongoose.model('Genre', genreSchema);

// REQUESTS
//Get books by genre (in progress)
app.get('/api/books/genre/:genreId', (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Create book
app.post('/api/books', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: req.body.genre,
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

//Get all books
app.get('/api/books', async (req, res) => {
  try {
    let books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get unread books
app.get('/api/books/unread', async (req, res) => {
  try {
    let books = await Book.find({isRead: false});
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Get read books
app.get('/api/books/read', async (req, res) => {
  try {
    let books = await Book.find({isRead: true});
    res.send(books);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Change isRead
app.put('/api/books/:bookId', async (req, res) => {
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
app.delete('/api/books/:bookId', async (req, res) => {
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
})

//LISTEN
app.listen(3000, () => console.log('Server listening on port 3000!'));