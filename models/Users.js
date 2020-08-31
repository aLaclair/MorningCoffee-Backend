const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        trim: true,
        minlength: [4, 'Username must be at least 4 characters'],
        unique: [true, 'Username is already taken']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        trim: true,
        minlength: [4, 'Password must be at least 4 characters']
    }
})

const Users = mongoose.model('Users', UserSchema)

module.exports =  Users