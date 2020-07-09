## CRUD Operations

#### Create

* Post: `/api/:hotelID/photos`

###### success: return status 200
###### error: return status 400

###### input format:
```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```


#### Read

* Get: `/api/:hotelID/photos`

###### success: return status 200
###### error: return status 400

###### returns:
```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```

#### Update

* Put: `/api/:hotelID/photos`

###### success: return status 200
###### error: return status 400

###### key/value pair requirements:
```
{
  id: { type: Number, unique: true },
  name: String,
  photoAlbums: [ String ],
  price: Number,
  photos: {
    id: String,
    albums: [ String ],
    filters: [ String ],
    date: Date,
    caption: String,
    trips: [ String ],
    helpful: Number,
    url: String
    user: {
      id: String,
      username: String,
      location: String,
      type: String,
      avatarUrl: String,
      rating: Number,
      contributions: Number,
      review: String
    }
  }
}
```


#### Delete

* Delete: `/api/:hotelID/photos`

###### success: return status 200
###### error: return status 400

###### removes all data given hotel id