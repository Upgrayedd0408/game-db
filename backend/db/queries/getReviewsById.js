const db = require('../connection');


const getReviewsById = async (id) => {
  const res = await db.query(`
    SELECT reviews.id, username, reviews.rating, reviews.message, reviews.game_id AS game_id
    FROM reviews
    JOIN games ON game_id = games.id
    JOIN users ON user_id = users.id
    WHERE games.id = $1
  `, [id])
  return res.rows
}




module.exports = getReviewsById;