const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');

router.post('/', async (req, res) => {
  const { wishlistId, gameId } = req.body;

  try {
    const result = await db.query('INSERT INTO wishlists_games (wishlist_id, game_id) VALUES ($1, $2) RETURNING *', [wishlistId, gameId]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while trying to add the game to the wishlist' });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT wg.id, g.name, gen.category as genre, g.store_url as url
      FROM wishlists_games wg
      JOIN games g ON wg.game_id = g.id
      JOIN genres gen ON g.genre_id = gen.id
      WHERE wg.wishlist_id = $1
    `, [1]); // replace 1 with the actual wishlist ID

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while trying to retrieve the games in the wishlist' });
  }
});

router.delete('/:gameId', async (req, res) => {
  const gameId = req.params.gameId;

  try {
    const result = await db.query('DELETE FROM wishlists_games WHERE game_id = $1 RETURNING *', [gameId]);
    if (result.rows.length > 0) {
      res.json({ message: 'Game removed from wishlist' });
    } else {
      res.status(404).json({ error: 'Game not found in wishlist' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while trying to remove the game from the wishlist' });
  }
});

module.exports = router;