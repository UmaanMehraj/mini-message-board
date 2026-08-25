const { Router } = require('express');
const { getMessages, createMessage, createMessagePost } = require('../controllers/indexController');

const indexRouter = Router()


indexRouter.get('/', getMessages)


indexRouter.get('/message/:id', (req, res) => {
    const index = Number(req.params.id)
    res.render("message", { message: messages[index - 1] })
})

indexRouter.get('/new', createMessage)

indexRouter.post('/new', createMessagePost)

module.exports = indexRouter