// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const getAllGames = require("./db/queries/getAllGames");

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

app.use(cors());

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const gamesApiRoutes = require('./routes/games-api');
const getGameById = require('./db/queries/getGameById');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above
app.use('/api/games', gamesApiRoutes);


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});


app.get('/games', (req, res) => {
  getAllGames()
    .then(data => {
      if (data.length === 0) {
        throw new Error('No game found');
      }
      console.log(data);
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(404).send('Game not found');
    });
});


app.get('/games/:id', (req, res) => {
  const id = req.params.id
  getGameById(id)
    .then(data => {
      if (data.length === 0) {
        throw new Error('No game found');
      }
      console.log("Server.js Line 83: ", data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err)
      res.status(404).send('Game not found');
    });
});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
