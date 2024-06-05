const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');

router.get('/', async (req, res) => {
  try {
    const games = await db.query('SELECT * FROM games');
    res.json(games.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching games' });
  }
});

module.exports = router;