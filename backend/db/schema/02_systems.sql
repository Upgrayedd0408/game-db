DROP TABLE IF EXISTS systems CASCADE;
CREATE TABLE systems (
  id SERIAL PRIMARY KEY NOT NULL,
  system_name VARCHAR(255) NOT NULL
);