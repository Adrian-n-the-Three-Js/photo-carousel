const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'] });

client.execute('select key from system.local', (err, result) => {
  if (err) throw err;
  console.log(result.rows[0]);
});

module.exports = client;
