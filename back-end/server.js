const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the db
mongoose.connect('mongodb://localhost:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// // REQUESTS
// //Get genre (in progress)
// app.get('/api/books/genre/:genreId', async (req, res) => {
//   try {
//     let genre = await Genre.findOne({name: rez.params.genreId});
//     if(!genres) {
//       res.send(404);
//       return;
//     }
//     res.send(genre);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);
// import the books module and setup its API path
const books = require("./books.js");
app.use("/api/books", books.routes);

//LISTEN
app.listen(3000, () => console.log('Server listening on port 3000!'));