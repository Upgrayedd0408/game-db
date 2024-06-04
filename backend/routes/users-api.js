/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db/connection.js');

// Registration route
router.post('/register', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  // Check if user already exists
  const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  if (user.rows.length > 0) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = { username, password: hashedPassword };
  
  try {
    await db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [newUser.username, newUser.password]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'There was an error registering the user' });
  }

  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;