## CRUD Operations

#### Create

* Post: `/api/:hotelID/photos`

###### success: return status 201


###### input expects JSON in the following format:
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


###### returns JSON:
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

* Patch: `/api/:hotelID/photos`

###### success: return status 204


###### input expects JSON with the following key/value pair:
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

###### success: return status 204


###### removes all data given hotel id