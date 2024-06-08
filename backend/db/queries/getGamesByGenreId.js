const db = require('../connection');

module.exports = function getGamesByGenreId(genreId) {
  return db.any('SELECT * FROM games WHERE genre_id = $1', [genreId]);
};