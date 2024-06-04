const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/connection.js');
const jwt = require('jsonwebtoken');

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

// User logged in successfully, create a session or token
req.session.user = user.rows[0].username; // If using sessions
// or
const token = jwt.sign({ username: user.rows[0].username }, 'secret'); // If using JWT tokens
res.json({ message: 'Logged in successfully', token }); // Send the token back to the client


});
module.exports = router;