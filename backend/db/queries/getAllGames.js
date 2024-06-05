const db = require('../connection');

const getAllGames = async () => {
  const res = await db.query(`
    SELECT games.id, games.name, games.trailer_url, games.controller_support, games.is_on_sale, language, category, rating, system_name
    FROM games
    JOIN languages ON games.language_id = languages.id
    JOIN genres ON games.genre_id = genres.id
    JOIN reviews ON games.id = reviews.id
    JOIN systems on games.id = systems.id
  `)
  return res.rows
};


/* const games = getAllGames().then(data => {
  console.log(data);
  return data
});
 */

// console.log(games);



module.exports = getAllGames;
