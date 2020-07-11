CREATE DATABASE sdc;

\connect sdc;

CREATE TABLE hotel (
  hotelID SERIAL PRIMARY KEY,
);

CREATE TABLE photos (
  photoID SERIAL PRIMARY KEY,
  date VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL
);

CREATE TABLE photoAlbums (
  photoAlbumID SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE hotelAlbumDump (
  hotelID INTEGER NOT NULL references hotel (hotelID),
  photoAlbumID INTEGER NOT NULL references photoAlbums (photoAlbumID)
);

CREATE TABLE hotelPhotoDump (
  hotelID INTEGER NOT NULL references hotel (hotelID),
  photoID INTEGER NOT NULL references photos (photoID)
);

CREATE TABLE photoAlbumDump (
  photoID INTEGER NOT NULL references photos (photoID),
  photoAlbumID INTEGER NOT NULL references photoAlbums (photoAlbumID)
);
