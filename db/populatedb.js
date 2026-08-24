require('dotenv').config();

const { Client } = require('pg');

const SQL = `
INSERT INTO messages (text, user)
VALUES
    ('Hi', 'Orlando'),
    ('Hello', 'Bloom'),
    ('Not all treasure is silver and gold mate!', 'Jack Sparrow')
`;

async function main() {
    console.log('seeding...');

    const url = new URL(process.env.DATABASE_URL);

    const client = new Client({
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        host: url.hostname,
        port: 5432,
        database: url.pathname.slice(1),
        ssl: {
            require: true
        }
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log('done');
}

main().catch(console.error);