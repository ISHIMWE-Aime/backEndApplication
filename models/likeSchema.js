const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    blogId: {
        type: String,
        required: [true, 'The blogId is not provided'],
        unique: true,
        require: true
    },
    likersIds:{
        type: [String],
        require: true
    }
})

// likeSchema.pre('save', async function(next){
//     likeSchema.set('validateBeforeSave', false)
//     next()
// })
const Like = mongoose.model('reaction', likeSchema)
module.exports = Like