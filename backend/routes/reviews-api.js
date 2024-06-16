const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');


router.post('/reviews/:id', async (req, res) => {
  const { inputs, textarea, rating } = req.body;
  const username = localStorage.getItem('username');
  const game_id = req.params.id;

  const user_id = await db.query('SELECT id FROM users WHERE username = $1', [username])

  try {
    await db.query('INSERT INTO reviews (rating, message, game_id, user_id) VALUES ($1, $2, $3, $4) RETURNING *', [rating, textarea, game_id, user_id])
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'There was an error submitting a new review '});
  }
})