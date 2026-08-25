require('dotenv').config();
const pool = require('./pool');

const SQL = `CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    "user" VARCHAR(255) NOT NULL,
    added TIMESTAMP DEFAULT NOW()
);
INSERT INTO messages (text, "user")
VALUES
    ('Hi', 'Orlando'),
    ('Hello', 'Bloom'),
    ('Not all treasure is silver and gold mate!', 'Jack Sparrow')
`;

async function main() {
    console.log('seeding...');
    const client = await pool.connect();
    try {
        await client.query(SQL);
        console.log('done');
    } finally {
        client.release();
    }
}

main()
    .catch((err) => {
        console.error('Seeding failed:', err);
        process.exitCode = 1;
    })
    .finally(() => pool.end());