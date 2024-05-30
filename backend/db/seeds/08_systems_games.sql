INSERT INTO systems_games (system_id, game_id)
VALUES
(1, 1),
(2, 1)




/* CREATE TABLE systems_games (
  id SERIAL PRIMARY KEY NOT NULL,
  system_id INTEGER REFERENCES systems(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
); */