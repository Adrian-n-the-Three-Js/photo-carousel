CREATE DATABASE sdc;

\connect sdc;

CREATE TABLE hotel_photos (
  photoID SERIAL PRIMARY KEY,
  hotelID INTEGER NOT NULL,
  date VARCHAR(255) NOT NULL,
  photoAlbum1 VARCHAR(255) NOT NULL,
  photoAlbum2 VARCHAR(255),
  url VARCHAR(255) NOT NULL
);
