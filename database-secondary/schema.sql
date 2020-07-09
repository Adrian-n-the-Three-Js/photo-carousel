CREATE DATABASE SDC;

\connect SDC

CREATE TABLE hotel (
  hotelID SERIAL,
  name VARCHAR(255),
  price INTEGER
);

ALTER TABLE hotel ADD PRIMARY KEY (hotelID);

CREATE TABLE photos (
  photoID SERIAL,
  date VARCHAR(255),
  caption VARCHAR(255),
  helpful INTEGER,
  url VARCHAR(255)
);

ALTER TABLE photos ADD PRIMARY KEY (photoID);

CREATE TABLE users (
  userID SERIAL,
  photoID INTEGER,
  username VARCHAR(255),
  location VARCHAR(255),
  type VARCHAR(255),
  avatarUrl VARCHAR(255),
  rating INTEGER,
  contributions INTEGER,
  review VARCHAR(1000)
);

ALTER TABLE users ADD PRIMARY KEY (userID);
ALTER TABLE users
  ADD CONSTRAINT users_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);

CREATE TABLE photoAlbums (
  photoAlbumID SERIAL,
  name VARCHAR(255)
);

ALTER TABLE photoAlbums ADD PRIMARY KEY (photoAlbumID);

CREATE TABLE filters (
  filterID SERIAL,
  name VARCHAR(255)
);

ALTER TABLE filters ADD PRIMARY KEY (filterID);

CREATE TABLE trips (
  tripID SERIAL,
  name VARCHAR(255)
);

ALTER TABLE trips ADD PRIMARY KEY (tripID);

CREATE TABLE hotelAlbumDump (
  hotelID INTEGER,
  photoAlbumID INTEGER
);

ALTER TABLE hotelAlbumDump
  ADD CONSTRAINT hotelAlbumDump_hotelID_fkey FOREIGN KEY (hotelID) references hotel (hotelID);
ALTER TABLE hotelAlbumDump
  ADD CONSTRAINT hotelAlbumDump_photoAlbumID_fkey FOREIGN KEY (photoAlbumID) references photoAlbums (photoAlbumID);

CREATE TABLE hotelPhotoDump (
  hotelID INTEGER,
  photoID INTEGER
);

ALTER TABLE hotelPhotoDump
  ADD CONSTRAINT hhotelPhotoDump_hotelID_fkey FOREIGN KEY (hotelID) references hotel (hotelID);
ALTER TABLE hotelPhotoDump
  ADD CONSTRAINT hotelPhotoDump_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);

CREATE TABLE photoAlbumDump (
  photoID INTEGER,
  photoAlbumID INTEGER
);

ALTER TABLE photoAlbumDump
  ADD CONSTRAINT photoAlbumDump_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);
ALTER TABLE photoAlbumDump
  ADD CONSTRAINT photoAlbumDump_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);

CREATE TABLE photoFilterDump (
  photoID INTEGER,
  filterID INTEGER
);

ALTER TABLE photoFilterDump
  ADD CONSTRAINT photoFilterDump_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);
ALTER TABLE photoFilterDump
  ADD CONSTRAINT photoFilterDump_filterID_fkey FOREIGN KEY (filterID) references filters (filterID);

CREATE TABLE photoTripDump (
  photoID INTEGER,
  tripID INTEGER
);

ALTER TABLE photoTripDump
  ADD CONSTRAINT photoTripDump_photoID_fkey FOREIGN KEY (photoID) references photos (photoID);
ALTER TABLE photoTripDump
  ADD CONSTRAINT photoTripDump_photoID_fkey FOREIGN KEY (tripID) references trips (tripID);