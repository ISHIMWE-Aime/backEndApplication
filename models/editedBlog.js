const mongoose = require("mongoose")
//const Joi = require('joi')

const editedBlogsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a blog title'],
        unique: true,
    },
    author:{
        type: String,
        required: [true, 'Please enter an author name']
    },
    content: {
        type: String,
        required: [true, 'Please enter a blog content'],
        unique: true,
    },
    imageUlr: {
        type:  [String] ,
        required: true,
        validate: [ 
            (array)=>{
                console.log("the image ulr is this: ",array)
                if(array[0] === ''){
                    //console.log('false returned!!!!!!!!!!!!!!!!!!!!!!!!!!')
                    return false
                }else{
                    return true
                }
            }
            , 'Please enter a image ulr to this blog'],
    }
})

const EditedBlogsSchema = mongoose.model('editedBlogsSchema', editedBlogsSchema)
module.exports = EditedBlogsSchema