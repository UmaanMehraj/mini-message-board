const pool = require('./pool')

async function getAllMessages() {
    const { rows } = await pool.query('Select * from messages')
    return rows
}

async function insertMessage(text, author) {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [text, author]);
}

module.exports = {
    getAllMessages, insertMessage
}