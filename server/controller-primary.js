const Hotels = require('../database/schema.js');

const get = function (req, res) {
  Hotels.find({ id: req.params.hotelID })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
};

module.exports = {
  get
};
