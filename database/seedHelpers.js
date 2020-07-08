const getRandomIndex = arr => Math.floor( Math.random() * arr.length );

// these functions generate random info for each schema

const generateHotelInfo = photos => {
  const createHotelNames = () => {
    const arr1 = [ 'Golden', 'Red', 'Blue', 'Purple', 'White', 'Scaly', 'Sunny', 'Warm', 'Happy', 'Ugly' ];
    const arr2 = [ 'Sands', 'Spring', 'Slopes', 'Springs', 'Sun', 'Skies', 'Sky', 'Stone', 'Waters', 'Lizard' ];

    const names = [];
    arr1.forEach(word1 => {
      arr2.forEach(word2 => {
        const name = `${word1} ${word2} Hotel`;
        names.push(name);
      });
    });
    return names;
  };

  const assignAlbums = () => {
    const albums = [ 'All photos', 'Traveler', 'Hotel & Amenities', 'Room/Suite', 'Bathroom', 'Dining' ];
    const random = Math.random();
    const extra = [ 'Favorites', 'Pool & Beach', 'Family/Play Areas' ];

    random < 0.7 && albums.push( extra[0] );
    random < 0.4 && albums.push( extra[1] );
    Math.random() < 0.4 && albums.push( extra[2] );

    return albums;
  };

  const assignPhotos = () => {
    const arr = [];
    const indexes = new Set();
    const numberOfPhotos = Math.floor( Math.random() * (30 - 4) + 4 );

    for (let i = 0; i < numberOfPhotos; i++) {
      let idx = Math.floor( Math.random() * numberOfPhotos );

      while ( indexes.has(idx) ) {
        idx = Math.floor( Math.random() * numberOfPhotos );
      }
      arr.push(photos[idx]);
      indexes.add(idx);
    }
    return arr;
  };

  const info = {
    names: createHotelNames(),
    albums: assignAlbums(),
    photos: assignPhotos(),
    price: Math.floor( Math.random() * (300 - 50) + 50 )
  };
  return info;
};

const generatePhotoInfo = users => {
  const assignAlbums = userType => {
    const arr = [ 'All photos' ];
    Math.random() < 0.2 && arr.push('Favorites');
    userType === 'traveler' && arr.push('Traveler');

    const albums = [ 'Hotel & Amenities', 'Pool & Beach', 'Room/Suite', 'Bathroom', 'Dining' ];
    arr.push( albums[getRandomIndex(albums)] );

    return arr;
  };

  const assignFilters = () => {
    const filters = [ 'All photos' ];
    const random = Math.random();
    const extra = [ 'Other', 'Bathroom', 'Dining', 'Amenities', 'Restaurants and Bars', 'Business Center/Function Rooms' ];

    random < 0.7 && filters.push( extra[getRandomIndex(extra)] );
    random < 0.2 && filters.push( 'View from Room' );

    return filters;
  };

  const assignTrips = () => {
    const trips = [ 'placeholder' ];
    return [ trips[getRandomIndex(trips)] ];
  };

  const info = {
    user: users[getRandomIndex(users)],
    albums: [],
    filters: assignFilters(),
    trips: assignTrips(),
    helpful: Math.floor( Math.random() * 30 ),
  };
  info.albums = assignAlbums(info.user.type);
  return info;
};

const generateUserInfo = () => {
  const locations = [ 'Rosario, Argentino', 'San Ramon, California', 'Beijing, China', 'Seoul, South Korea', 'Purmerend, The Netherlands', 'The Moon', 'Cloud City, Bespin' ];
  const types = [ 'traveler', 'management', 'professional' ];
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const ratings = [];
  for (let i = 0; i <= 5; i += 0.5) { ratings.push(i); }

  const info = {
    location: locations[getRandomIndex(locations)],
    type: types[getRandomIndex(types)],
    rating: ratings[getRandomIndex(ratings)],
    contributions: Math.ceil( Math.random() * 300 ),
    review: text
  };
  return info;
};

module.exports = {
  generateUserInfo,
  generatePhotoInfo,
  generateHotelInfo
};
