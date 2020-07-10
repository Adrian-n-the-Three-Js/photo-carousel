const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');

const writer = csvWriter();

const photos = [
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1444201983204-c43cbd584d93.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1445019980597-93fa8acb246c.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1445991842772-097fea258e7b.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1462539405390-d0bdb635c7d1.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1486591038957-19e7c73bdc41.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1495365200479-c4ed1d35e1aa.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1496417263034-38ec4f0b665a.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1505576391880-b3f9d713dc4f.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1515362778563-6a8d0e44bc0b.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1517840901100-8179e982acb7.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1518733057094-95b53143d2a7.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1519449556851-5720b33024e7.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1522798514-97ceb8c4f1c8.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1525905708812-b271b5e3b2f3.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1528916138893-06acfc566dea.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1529290130-4ca3753253ae.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1535827841776-24afc1e255ac.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1537572263231-4314a30d444f.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1540541338287-41700207dee6.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1549294413-26f195200c16.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1551882547-ff40c63fe5fa.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1551918120-9739cb430c6d.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1553653924-39b70295f8da.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1563911302283-d2bc129e7570.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1564501049412-61c2a3083791.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1566073771259-6a8506099945.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1571003123894-1f0594d2b5d9.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1571896349842-33c89424de2d.jpeg',
  'https://sdc-carousel-photos.s3-us-west-1.amazonaws.com/photos/photo-1582719508461-905c673771fd.jpeg'
];

// THIS IS DUMB. REALLY DUMB. FIND A BETTER SOLUTION IDIOT.
const photoID = [
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
  faker.random.uuid,
];

const photoAlbums = ['All photos', 'Traveler', 'Hotel & Amenities', 'Room/Suite', 'Bathroom', 'Dining', 'Favorites', 'Pool & Beach', 'Family/Play Areas'];

const generateHotel = function () {
  let result = [];

  for (let i = 0; i < 10000000; i++) {
    result.push({
      hotelID: i + 1,
      photoAlbums: photoAlbums,
      photos: photoID,
    });
  }
  return result;
};

const generatePhotos = function () {
  let result = [];

  for (let i = 0; i < 10000000; i++) {
    for (let j = 0; j < 20; j++) {
      result.push({
        photoID: photoID[j],
        hotelID: i + 1,
        userID: faker.random.uuid,
        date: faker.date.between('2020-04-01', '2020-07-01'),
        url: photos[j],
        photoAlbums: [photoAlbums[0], photoAlbums[Math.floor(Math.random() * 9)]],
      });
    }
  }
  return result;
};

const hotelData = generateHotel();
const photoData = generatePhotos();

const seedHotelData = function () {
  writer.pipe(fs.createWriteStream('hotelData.csv'));
  writer.write(hotelData);
};

const seedPhotoData = function () {
  writer.pipe(fs.createWriteStream('photoData.csv'));
  writer.write(photoData);
};

seedHotelData();
seedPhotoData();
