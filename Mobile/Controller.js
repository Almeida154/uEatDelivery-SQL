const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let port = process.env.port || 3000
let user = models.User
let address = models.Address

// Search

app.post('/login', async (req, res) => {
    let r = await user.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    if(r !== null) res.send(r)
    else res.send(JSON.stringify('Not Found'))
})

// Create

app.post('/register', async (req, res) => {
    let cpf = await user.findOne({
        where: {
            cpf: req.body.cpf
        }
    })

    let username = await user.findOne({
        where: {
            username: req.body.username
        }
    })

    if(cpf !== null || username !== null) res.send(JSON.stringify('Already Registered'))
    else {
        let c = await user.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            cpf: req.body.cpf,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        res.send(JSON.stringify('Registered'))
    }
})

app.listen(port, (req, res) => console.log(`Running at localhost:${port}`))