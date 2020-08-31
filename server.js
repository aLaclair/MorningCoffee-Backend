const express = require('express')
const mongoose = require('mongoose')

const db = require('./models')

let PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
    res.send('This is the backend for my app MorningCoffee')
})

app.get('/users', function(req, res) {
    db.Users.find().then(function(response) {
        res.json(response)
    })
})

app.post('/addUser', function(req, res) {
    db.Users.create(req.body).then(function(dbUser) {
        res.send(dbUser)
    })
})

app.get('/users/:id/schedule', function(req, res) {
    db.Schedule.find({userId: req.params.id}).then(function(response) {
        res.json(response)
    })
})

app.post('/addScheduleBlock', function(req, res) {
    db.Schedule.create(req.body).then(function(response) {
        res.json(response)
    })
})

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`)
})