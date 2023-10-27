const pgp = require('pg-promise')();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const db = pgp({
    user: DB_USER,
    host: 'localhost',
    database: DB_NAME,
    password: DB_PASSWORD,
    port: 5432, 
});

module.exports = db;