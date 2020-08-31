const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ScheduleBlock = new Schema({
    userId: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    endTime: {
        type: Number,
        required: true
    }
})

const Schedule = mongoose.model('ScheduleBlock', ScheduleBlock)

module.exports = Schedule