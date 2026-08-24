const { Client } = require('pg')

const SQL = `
INSERT INTO messages (text, user) VALUES ('Hi', 'Orlando'), ('Hello', 'Bloom'), ('Not all treasure is silver and gold mate!', 'Jack Sparrow')`

async function main() {
    console.log('seeding...')
    const client = new Client({
        connectionString: process.env.DB_CONNECTION_STRING
    })

    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log('done')
}


main()