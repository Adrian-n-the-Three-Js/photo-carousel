CREATE KEYSPACE IF NOT EXISTS sdc
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 3
  };

CREATE TABLE hotel (
  hotelID uuid,
  photoAlbums set<varchar>,
  PRIMARY KEY (hotelID)
);

CREATE TABLE photos_by_hotel (
  photoID uuid,
  hotelID uuid,
  userID uuid,
  date timestamp,
  url varchar,
  photoAlbum set<varchar>,
  PRIMARY KEY (photoID, hotelID)
);
