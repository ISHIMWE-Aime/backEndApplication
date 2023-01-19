const mongoose = require('mongoose')
const { isEmail } = require('validator')


const contactMe = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please enter your name for more clarity']
    },
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    UserMessage: {
        type: String,
        required: [true, 'Please enter the message'],
    },
})

const ContactMe = mongoose.model('message', contactMe)
module.exports = ContactMe