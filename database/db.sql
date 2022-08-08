CREATE DATABASE restapi;

\l
\c restapi;

CREATE TABLE Animals(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    breed VARCHAR(50)
);

INSERT INTO Animals(name,breed)
      VALUES('tiger','labrador'),('charlie','german shephard');

SELECT * FROM Animals;      