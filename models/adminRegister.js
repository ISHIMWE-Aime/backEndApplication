const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

//admin schema
const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter the email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter the password'],
        minLength: [6, 'Minimum password length is 6 characters'],
        validate: [
            (password) => {
            const reg = /^(((?=.*[a-z])(?=.*[A-Z]))((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
            if (reg.test(password)) {
                return true
            } else {
                return false
            }
        },
        "The password must contain upper & lower case mixed with atleast one numbers and spcial char"]
    }
})

// static method to login admin
adminSchema.statics.login = async function (email, password) {
    //console.log({ email })
    const admin = await AdminSchema.findOne({ email })

    if (admin) {

        //console.log(admin)
        //console.log(password)

        //console.log(bcrypt.compare(password, admin.password))

        const auth = await bcrypt.compare(password, admin.password)
        //console.log('the value of auth is: ', auth)
        
        if (auth) {
            return admin
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

//fire a function before admin doc saved to db
adminSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        console.log(error)
        next()
    }
})


const AdminSchema = mongoose.model('admin', adminSchema)
module.exports = AdminSchema

