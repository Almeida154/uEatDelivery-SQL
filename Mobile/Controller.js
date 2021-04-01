const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

let port = process.env.port || 3000

app.listen(port, (req, res) => {
    console.log('Running')
})

app.get('/', (req, res) => {
    res.send('<H1>Ta rodando fml</H1>')
})