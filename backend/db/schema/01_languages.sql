DROP TABLE IF EXISTS languages CASCADE;
CREATE TABLE languages (
  id SERIAL PRIMARY KEY NOT NULL,
  language VARCHAR(255) NOT NULL
);