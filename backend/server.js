// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const getAllGames = require("./db/queries/getAllGames");
const bodyParser = require('body-parser');
const session = require('express-session');
const gamesRouter = require('./routes/games');
const genresRouter = require('./routes/genres');
const db = require('./db/connection.js');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set to true if your app is on https
}));

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


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
// const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const gamesApiRoutes = require('./routes/games-api');
const getGameById = require('./db/queries/getGameById');
const getReviewsById = require('./db/queries/getReviewsById');
const loginRoutes = require('./routes/login'); // New login route
// const reviewsApiRoutes = require('./routes/reviews-api')

app.use('/api/users', userApiRoutes);
// app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.use('/api/users/login', loginRoutes); // New login route
app.use('/api/games', gamesRouter); // New games route
app.use('/api/genres', genresRouter); // New genres route
// app.use('/api/reviews', reviewsApiRoutes); // New reviews route

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
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(404).send('Game not found');
    });
});

app.get('/reviews/:id', (req, res) =>{
  const id = req.params.id;
  getReviewsById(id)
    .then(data => {
      if (data.length === 0) {
        throw new Error('No reviews found');
      }
      console.log("Server.js Line 109 Reviews:", data);
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(404).send('Review not found');
    });
});

app.post('/reviews/:id', async (req, res) => {
  const { username, textarea, rating } = req.body;
  const game_id = req.params.id;
  console.log("Server.js line 121: ", game_id);

  const user_id = await db.query('SELECT id FROM users WHERE username = $1', [username]).then((data) => {return data.rows[0].id});
  console.log("Server.js line 123: ", user_id);

  try {
    await db.query('INSERT INTO reviews (rating, message, game_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [rating, textarea, game_id, user_id])

    res.json({ message: 'Review submitted successfully' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'There was an error submitting a new review '});
  }
})





app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});