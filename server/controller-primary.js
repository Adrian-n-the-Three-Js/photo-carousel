const client = require('../database-primary/index.js');

const get = function (req, res) {
  const hotelID = req.params.hotelID;
  const query = `SELECT * FROM sdc.hotel WHERE hotelID = ${hotelID}`;

  client.execute(query, (err, result) => {
    if (err) res.sendStatus(400);
    res.send(result);
  });
};

module.exports = {
  get
};
