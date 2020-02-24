const pg = require('pg');
const client = new pg.Client('postgres://localhost/cal-poly');
client.connect();

module.exports = { client };

