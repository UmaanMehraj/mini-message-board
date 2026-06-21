const express = require('express')
const app = express()
const path = require('node:path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const PORT = 3000

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

app.get('/', (req, res) => {
    res.render('index', { messages: messages })
})

app.listen(PORT, (err) => {
    if (err) {
        throw err
    }
})