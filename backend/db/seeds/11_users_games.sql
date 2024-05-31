INSERT INTO users_games (user_id, game_id)
VALUES
(1, 2),
(2, 1)




/* CREATE TABLE users_games (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
); */