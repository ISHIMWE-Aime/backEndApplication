const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema({
    token:{
        type: String,
        required: [true, 'Internal Server Error']
    }
})

const Token = mongoose.model('token', tokenSchema)
module.exports = Token