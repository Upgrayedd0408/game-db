DROP TABLE IF EXISTS reviews_games CASCADE;
CREATE TABLE reviews_games (
  id SERIAL PRIMARY KEY NOT NULL,
  review_id INTEGER REFERENCES reviews(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
);