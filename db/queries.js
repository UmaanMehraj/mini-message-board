const pool = require('./pool')

async function getAllMessages() {
    const { rows } = await pool.query('Select * from messages')
    return rows
}

async function insertMessage(text, author) {
    await pool.query('INSERT INTO messages (text, "user") VALUES ($1, $2)', [text, author]);
}

async function getMessage(text) {
    const { rows } = await pool.query('Select * from messages where message = ($1)', [text])
    return rows
}

module.exports = {
    getAllMessages, insertMessage, getMessage
}