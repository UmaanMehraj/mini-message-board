require('dotenv').config();

const { Pool } = require('pg');

const url = new URL(process.env.DATABASE_URL);

const pool = new Pool({
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    host: url.hostname,
    port: 5432,
    database: url.pathname.slice(1),
    ssl: {
        require: true
    }
});

console.log('pool created');

module.exports = pool;