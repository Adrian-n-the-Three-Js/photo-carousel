CREATE KEYSPACE IF NOT EXISTS sdc
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 3
  };

USE sdc

CREATE TABLE hotel_photos (
  hotelID int,
  photoID int,
  date text,
  photoAlbum text,
  url text,
  PRIMARY KEY (hotelID, photoID)
);
