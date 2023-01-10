const { urlencoded } = require("express")
const mongoose = require("mongoose")
//const Joi = require('joi')

const blogsSchema = mongoose.Schema({
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
        type: [String],
        required: [true, 'Please enter a blog content'],
        unique: true,
    }
})

const BlogsSchema = mongoose.model('Blog', blogsSchema)
module.exports = BlogsSchema