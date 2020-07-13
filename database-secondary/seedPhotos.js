const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const photoAlbums = ['All photos', 'Traveler', 'Hotel & Amenities', 'Room/Suite', 'Bathroom', 'Dining', 'Favorites', 'Pool & Beach', 'Family/Play Areas'];

const randomNumber = () => (
  Math.floor(Math.random() * 1000 + 1)
);

const seedPhotoData = () => {
  writer.pipe(fs.createWriteStream('csv-psql/photoData-.csv'));

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 20; j++) {
      writer.write({
        hotelID: i + 1,
        photoID: faker.random.uuid(),
        date: faker.date.between('2020-04-01', '2020-07-01'),
        photoAlbum1: photoAlbums[0],
        photoAlbum2: photoAlbums[Math.floor(Math.random() * 8 + 1)],
        url: `https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/sdc-${randomNumber()}.jpg`,
      });
    }
  }

  writer.end();
  console.log('photo seed done');
};

seedPhotoData();
