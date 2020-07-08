const Hotels = require('../database/schema.js');

const get = function (req, res) {
  Hotels.find({ id: req.params.hotelID })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
};

const post = function (req, res) {
  Hotels.insertOne(req.body)
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send('added to db!')
    })
};

const edit = function (req, res) {
  Hotels.find({ id:req.params.hotelID}).edit()
};

const delete = function (req, res) {
  Hotels.deleteOne({ id: req.params.hotelID })
};

module.exports = {
  get,
  post,
  edit,
  delete
};
