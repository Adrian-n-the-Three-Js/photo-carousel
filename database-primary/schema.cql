CREATE KEYSPACE IF NOT EXISTS sdc
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 3
  };

USE sdc

CREATE TABLE hotel (
  hotelID int,
  photoAlbums set<text>,
  PRIMARY KEY (hotelID)
);

CREATE TABLE photos_by_hotel (
  photoID int,
  hotelID int,
  date text,
  photoAlbum set<text>,
  url text,
  PRIMARY KEY (photoID, hotelID)
);
