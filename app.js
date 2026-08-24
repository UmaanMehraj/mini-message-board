require('dotenv').config();
const express = require('express')
const app = express()
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')
const assetsPath = path.join(__dirname, "public")


app.use(express.static(assetsPath))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.use('/', indexRouter)

app.get('/{*splat}', (req, res) => {
    res.send("Error Page not found")
})


app.listen(PORT, (err) => {
    if (err) {
        throw err
    }
    console.log(`App runing on Port:${PORT}`)
})