const express = require('express')
const mongoose = require('mongoose')
const schedule = require('node-schedule')

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
    }).catch(err => res.send(err))
})

app.get('/findUser/:username', function(req, res) {
    db.Users.findOne({username: req.params.username}).then(function(response) {
        if(response) {
            res.json(response)
        } else {
            res.json({"error": "No User Found"})
        }
    }).catch(err => res.send(err))
})

app.post('/addUser', function(req, res) {
    db.Users.create(req.body).then(function(dbUser) {
        res.json(dbUser)
    }).catch(err => res.send(err))
})

app.get('/users/:id/schedule', function(req, res) {
    db.Schedule.find({userId: req.params.id}).then(function(response) {
        res.json(response)
    }).catch(err => res.send(err))
})

app.post('/addScheduleBlock', function(req, res) {
    db.Schedule.create(req.body).then(function(response) {
        res.json(response)
    }).catch(err => res.send(err))
})

app.get('/delete/block/:id', function(req, res) {
    db.Schedule.deleteOne({_id: req.params.id}).then(function(response) {
        res.json(response)
    }).catch(err => res.send(err))
})

const drop = schedule.scheduleJob('* 0 * * *', () => {
    db.Schedule.deleteMany({}).then(function(response) {
        console.log(response)
    })
})

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`)
})