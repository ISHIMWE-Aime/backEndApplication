const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const { app } = require('../app')
chai.use(chaiHttp)
// console.log("Start of app");
// console.log(app)
// console.log("End of app");

//Login test
describe('Loggin operation testing', function () {

    it('should logs in a user', (done) => {
        chai
            .request(app)
            .post('/login')
            .send({
                "email": "erighbhbhbc@google.com",
                "password": "Teta@2005"
            })
            .end((err, res) => {
                if (err) {
                    console.log("The err is :", err)
                    return done(err)
                }

                //error message testing
                describe("Login error message testing", function () {
                    if (res.body.statusCode === 400) {
                        it.skip('should test user login successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, "user log in succesful")
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })

                        it("should check user login error messages", (done) => {

                            assert.equal(res.statusCode, 400)
                            if (res.body.message[0].email !== "") {
                                assert.equal(res.body.message[0].email, "that email is not registered")
                            } else {
                                assert.equal(res.body.message[0].email, "")
                            }
                            if (res.body.message[0].password !== "") {
                                assert.equal(res.body.message[0].password, "incorrect password")
                            } else {
                                assert.equal(res.body.message[0].password, "")
                            }
                            done()
                        })
                    }




                    if (res.body.statusCode === 200) {
                        it('should test user login successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, "user log in succesful")
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })

                        it.skip("should check user login error messages", (done) => {
                            if (res.body.statusCode === 400) {
                                assert.equal(res.statusCode, 400)
                                if (res.body.message[0].email !== "") {
                                    assert.equal(res.body.message[0].email, "that email is not registered")
                                } else {
                                    assert.equal(res.body.message[0].email, "")
                                }
                                if (res.body.message[0].password !== "") {
                                    assert.equal(res.body.message[0].password, "incorrect password")
                                } else {
                                    assert.equal(res.body.message[0].password, "")
                                }
                            }
                            done()
                        })
                    }
                    done()
                })
            })
    })
})

//SignUp testing
describe('Sign up operation testing', () => {
    it('should Register a user in my DB', (done) => {
        chai
            .request(app)
            .post('/userRegister')
            .send({
                "email": "acerighbhbhbc@google.com",
                "password": "Teta@2005"
            })
            .end((err, res) => {
                if (err) {
                    console.log("The err is :", err)
                    return done(err)
                }

                //error message testing
                describe("Registration responce messages testing", function () {
                    if (res.body.statusCode === 400) {
                        it("should check user registration error messages", (done) => {
                            assert.equal(res.statusCode, 400)
                            assert.equal(res.body.message, "That email is already registered")
                            done()
                        })

                        it.skip('should check the registration successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, 'Your registration done successfully')
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })
                    }

                    if (res.body.statusCode === 200) {
                        it('shoukd check the registration successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, 'Your registration done successfully')
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })

                        it.skip("should check user registration error messages", (done) => {
                            if (res.body.statusCode === 400) {
                                assert.equal(res.statusCode, 400)
                                assert.equal(res.body.message, "That email is already registered")
                            }
                            done()
                        })

                    }
                    done()
                })
            })
    })
})

//Admin login
describe('Admin Loggin operation testing', function () {

    it('should logs in a admin', (done) => {
        chai
            .request(app)
            .post('/adminLogin')
            .send({
                "email": "fabricei645@gmail.com",
                "password": "Fab3@2005"
            })
            .end((err, res) => {
                if (err) {
                    console.log("The err is :", err)
                    return done(err)
                }

                //error message testing
                describe("Admin login responce messages testing", function () {
                    if (res.body.statusCode === 400) {
                        it.skip('should test admin login successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, "Admin log in succesful")
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })
                        it("should check admin login error messages", (done) => {

                            assert.equal(res.statusCode, 400)
                            if (res.body.message[0].email !== "") {
                                assert.equal(res.body.message[0].email, "that email is not registered")
                            } else {
                                assert.equal(res.body.message[0].email, "")
                            }
                            if (res.body.message[0].password !== "") {
                                assert.equal(res.body.message[0].password, "incorrect password")
                            } else {
                                assert.equal(res.body.message[0].password, "")
                            }
                            done()
                        })
                    }



                    if (res.body.statusCode === 200) {
                        it('should test admin login successfulness', (done) => {
                            //testing for success
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, "Admin log in succesful")
                            //assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })

                        it.skip("should check admin login error messages", (done) => {

                            assert.equal(res.statusCode, 400)
                            if (res.body.message[0].email !== "") {
                                assert.equal(res.body.message[0].email, "that email is not registered")
                            } else {
                                assert.equal(res.body.message[0].email, "")
                            }
                            if (res.body.message[0].password !== "") {
                                assert.equal(res.body.message[0].password, "incorrect password")
                            } else {
                                assert.equal(res.body.message[0].password, "")
                            }
                            done()
                        })
                    }
                    done()
                })

            })
    })
})

//log out
describe('User log out operation', () => {
    it('should logs out a user', (done) => {
        chai
            .request(app)
            .get('/logout')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done(err)
                }

                assert.equal(res.statusCode, 200)
                assert.equal(res.body.message, "You are logged out successfully")
                assert.equal(res.body.data[0], "Home page")
                done()
            })
    })
})