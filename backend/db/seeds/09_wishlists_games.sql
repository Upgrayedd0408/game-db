INSERT INTO wishlists_games (wishlist_id, game_id)
VALUES
(1, 1),
(2, 2)



/* CREATE TABLE wishlists_games (
  id SERIAL PRIMARY KEY NOT NULL,
  wishlist_id INTEGER REFERENCES wishlists(id) ON DELETE CASCADE,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE
); */