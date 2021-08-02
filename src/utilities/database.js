const { Client } = require('pg');

const dotenv = require('dotenv');
dotenv.config();

// ElephantSQL url
const connectionUrl = process.env.PGURL;
const databaseClient = new Client(connectionUrl);

module.exports = databaseClient;
