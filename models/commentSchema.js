const mongoose = require('mongoose')

const comentSchema = new mongoose.Schema({
    blogId: {
        type: String,
        required: [true, 'The blogId is not provided'],
        unique: false
    },
    userId: {
        type: String,
        required: [true, 'The userId of is not provided'],
        unique: false
    },
    comentData: {
        type: String,
        required: [true, 'Please enter a coment content'],
        unique: false
    },
},
{ timestamps: true }
)

comentSchema.pre('save', async function(next){
    comentSchema.set('validateBeforeSave', false)
    next()
})
const Coment = mongoose.model('coment', comentSchema)
module.exports = Coment