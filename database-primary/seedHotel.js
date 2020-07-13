const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const photoAlbums = ['"All photos"', '"Traveler"', '"Hotel & Amenities"', '"Room/Suite"', '"Bathroom"', '"Dining"', '"Favorites"', '"Pool & Beach"', '"Family/Play Areas"'];

const seedHotelData = () => {
  writer.pipe(fs.createWriteStream('csv-cql/hotelData.csv'));

  for (let i = 0; i < 5; i++) {
    writer.write({
      hotelID: i + 1,
      photoAlbums: photoAlbums
    });
  }
  writer.end();
  console.log('hotel seed done');
};

seedHotelData();
