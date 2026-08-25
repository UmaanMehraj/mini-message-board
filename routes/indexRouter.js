const { Router } = require('express');
const { getMessages, createMessage, createMessagePost } = require('../controllers/indexController');

const indexRouter = Router()

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


indexRouter.get('/', getMessages)

indexRouter.get('/message/:id', (req, res) => {
    const index = Number(req.params.id)
    res.render("message", { message: messages[index - 1] })
})

indexRouter.get('/new', createMessage)

indexRouter.post('/new', createMessagePost)

module.exports = indexRouter