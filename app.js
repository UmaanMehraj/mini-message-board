const express = require('express')
const app = express()
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.use('/', indexRouter)


app.listen(PORT, (err) => {
    if (err) {
        throw err
    }
    console.log(`App runing on Port:${PORT}`)
})