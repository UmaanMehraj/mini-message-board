require('dotenv').config();
try {
    require('net').setDefaultAutoSelectFamily(false);
} catch (e) {
    // older Node version, ignore
}

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 10000,
});

console.log('pool created');

module.exports = pool;