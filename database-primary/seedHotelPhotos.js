const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const photoAlbums = ['All photos', 'Traveler', 'Hotel & Amenities', 'Room/Suite', 'Bathroom', 'Dining', 'Favorites', 'Pool & Beach', 'Family/Play Areas'];
const randomNumber = () => (
  Math.floor(Math.random() * 1000 + 1)
);

const seedPhotoData = (start, end) => {
  writer.pipe(fs.createWriteStream('csv-cql/hotelPhotoData.csv'));

  let photoIdCount = start;

  for (let i = start; i <= end; i++) {
    writer.write({
      hotelID: Math.floor(photoIdCount / 5) + 1,
      photoID: photoIdCount++,
      date: faker.date.between('2020-04-01', '2020-07-01'),
      photoAlbums: `[${[photoAlbums[0], photoAlbums[Math.floor(Math.random() * 8 + 1)]]}]`,
      url: `https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/sdc-${randomNumber()}.jpg`
    });
  }

  writer.end();
  console.log('photo seed done');
};

// seedPhotoData(1, 10000000);
// seedPhotoData(10000001, 20000000);
// seedPhotoData(20000001, 30000000);
// seedPhotoData(30000001, 40000000);
seedPhotoData(40000001, 50000000);
