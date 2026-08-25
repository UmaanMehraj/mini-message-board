const { text } = require('express')
const db = require('../db/queries')

async function getMessages(req, res) {
    const messages = await db.getAllMessages()
    res.render("index", { messages: messages })
}

async function createMessage(req, res) {
    res.render('form')
}

async function createMessagePost(req, res) {
    const { message, authorName } = req.body
    await db.insertMessage(message, authorName)
    res.redirect('/')
}

module.exports = {
    getMessages, createMessage, createMessagePost
}