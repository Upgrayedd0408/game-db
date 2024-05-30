INSERT INTO reviews_games (review_id, game_id)
VALUES
(1, 1),
(2, 2)



/* CREATE TABLE reviews_games (
  id SERIAL PRIMARY KEY NOT NULL,
  review_id INTEGER REFERENCES reviews(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
); */