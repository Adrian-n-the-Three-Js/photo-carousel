CREATE KEYSPACE IF NOT EXISTS sdc
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
  };

CREATE TABLE hotel (
  hotelID uuid,
  name varchar,
  price int,
  photos list<uuid>
  photoAlbum set<varchar>,
  PRIMARY KEY (hotelID)
);

CREATE TABLE photos_by_hotel (
  photoID uuid,
  hotelID uuid,
  userID uuid,
  date timestamp,
  caption varchar,
  helpful int,
  url varchar,
  photoAlbum set<varchar>,
  filter set<varchar>,
  trips set<varchar>,
  PRIMARY KEY (photoID, hotelID)
);

CREATE TABLE user_by_photo (
  userID uuid,
  photoID uuid,
  username text,
  location text,
  type text,
  avatarUrl text,
  rating text,
  contributions text,
  review text,
  PRIMARY KEY (userID, photoID)
);
