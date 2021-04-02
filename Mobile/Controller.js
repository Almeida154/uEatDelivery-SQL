const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

let port = process.env.port || 3000
let user = models.User
let address = models.Address

app.listen(port, (req, res) => console.log(`Running at localhost:${port}`))

app.get('/create', async (req, res) => {
    let createUser = await user.create({
        username: 'almeida154',
        password: 'bgk35670',
        name: 'David Almeida',
        email: 'almeida@gmail',
        phone: '(11) 95764-8755',
        cpf: '535.091.238-08',
        createdAt: new Date(),
        updatedAt: new Date()
    })
    let createAddress = await address.create({
        cep: '08030-590',
        street: 'R. Osório',
        uf: 'SP',
        district: 'Vila Nova Curuçá',
        locality: 'São Paulo',
        number: '1305',
        userId: createUser.id,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    res.send('user criado com sucesso!')
})

app.get('/read', async (req, res) => {
    let readUser = await user.findAll({raw: true})
    let readAddress = await address.findAll({raw: true})
    let data = [readUser, readAddress]
    res.send(data)
    console.log(data)
})

app.get('/update', async (req, res) => {
    // let update = await user.findByPk(3).then(r => {
    //     r.username = 'davidzyn'
    //     r.save()
    // })

    let update = await user.findByPk(4, {include:[{all: true}]})
        .then(r => {
            res.send(r.Addresses[0].street)
            console.log(r)
            r.Addresses[0].street = 'R. Franco'
            r.Addresses[0].save()
        })
})

app.get('/delete', async (req, res) => {
    user.destroy({
        where: {
            id: 4
        }
    })
    res.send('deletado')
})