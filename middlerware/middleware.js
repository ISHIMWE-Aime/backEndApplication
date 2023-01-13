const jwt = require('jsonwebtoken')
const express = require("express")
const UserSchema = require('../models/userRegister')
const routes = require('../router/routes')
const app = express()



const requireAuth = (req, res, next) => {
    console.log("the requireAuth running")
    //const token = req.cookies.jwt

    const { authorization } = req.headers;
    console.log('The authorisation is: ', authorization)

    if (!authorization) {
        return res.sendStatus(403);
    }else{
        console.log('The authorisation available')
    }

    let token = authorization.split(" ")

    if(token.length > 1){
        token = token[1]
    }
    else{
        token = token[0]
    }

    //console.log("token after condition",token)
    //check json web token exists & verified
    if (token) {

        jwt.verify(token, 'isiotaidigitalfafocal', (err, decodedToken) => {
            if (err) {
                //console.log(err.message)
                return res.status(401).json({ "statusCode": 401, "message": "You are not an admin"})
            } else {
                //res.redirect('/adminDashboard')
                //console.log(decodedToken)
                next()
            }
        })

    }

    else {
        res.status(406).json({ "statusCode": 406, "message": "Please login", "data":["Login Page"]})
        //res.redirect('/login')
    }
}


//check the current user 

const checkUser = (req, res, next) => {

    //console.log(req.cookies.jwt)

    //const token = req.cookies.jwt

    const { authorization } = req.headers;
    console.log('The authorisation is: ', authorization)

    if (!authorization) {
        return res.sendStatus(403);
    }else{
        console.log('The authorisation available')
    }

    let token = authorization.split(" ")

    if(token.length > 1){
        token = token[1]
    }
    else{
        token = token[0]
    }

    //console.log("token after condition",token)
    
    if (token) {
        jwt.verify(token, 'iotuserdigitalfocal', async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.locals.user = null;
                res.status(400).json({ error: (err.message +" "+ "Please log in")})
                //res.redirect('/')
                //next()
            } else {
                console.log(decodedToken)
                let user = await UserSchema.findById(decodedToken.id)
                res.locals.user = user;
                next()
            }
        })
    } else {
        //console.log("this run")
        res.locals.user = null;
        //res.redirect('Login Page')//render login page to the user
        res.status(406).json({ "statusCode": 406, "message": "Please login", "data":["Login Page"]})
    }

}

module.exports = { requireAuth, checkUser }