DROP TABLE IF EXISTS wishlists CASCADE;
CREATE TABLE wishlists (
  id SERIAL PRIMARY KEY NOT NULL,
  game VARCHAR(255) NOT NULL
);