const express = require("express");
const router = express.Router();
// const db = require("../db/connection");
const getAllGames = require("../db/queries/getAllGames");

const app = express();

router.get('/games', (req, res) => {
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


module.exports = router;
