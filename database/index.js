const mongoose = require('mongoose');

mongoose.connect(
  // 'mongodb://172.17.0.2/fec', // for AWS/Docker deployment
  'mongodb://localhost/fec', // for local
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const db = mongoose.connection;

db.on('error', () => console.log('db connection error'));
db.once('open', () => console.log('db connected'));

module.exports = db;
