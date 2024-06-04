const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/connection.js');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  if (user.rows.length === 0) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  // Check password
  const validPassword = await bcrypt.compare(password, user.rows[0].password);
  if (!validPassword) {
    return res.status(400).json({ error: 'Invalid username or password' });
  }

  res.json({ message: 'Logged in successfully' });
});

module.exports = router;