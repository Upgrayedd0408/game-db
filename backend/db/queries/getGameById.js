const db = require('../connection');

const getGameById = async (id) => {
  const res = await db.query(`
    SELECT games.id, games.name, games.trailer_url, games.controller_support, games.is_on_sale, language, category, rating, system_name
    FROM games
    JOIN languages ON games.language_id = languages.id
    JOIN genres ON games.genre_id = genres.id
    JOIN reviews ON games.id = reviews.id
    JOIN systems on games.id = systems.id
    WHERE games.id = $1
  `, [id])
  return res.rows
}





module.exports = getGameById;