CREATE KEYSPACE IF NOT EXISTS sdc
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 3
  };

USE sdc

CREATE TABLE hotel (
  hotelID uuid,
  photoAlbums set<text>,
  PRIMARY KEY (hotelID)
);

CREATE TABLE photos_by_hotel (
  photoID uuid,
  hotelID uuid,
  date date,
  url text,
  photoAlbum set<text>,
  PRIMARY KEY (photoID, hotelID)
);
