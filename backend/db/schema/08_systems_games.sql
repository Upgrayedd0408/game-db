DROP TABLE IF EXISTS systems_games CASCADE;
CREATE TABLE systems_games (
  id SERIAL PRIMARY KEY NOT NULL,
  system_id INTEGER REFERENCES systems(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
);