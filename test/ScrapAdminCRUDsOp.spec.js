/*const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const { app } = require('../app')
chai.use(chaiHttp)

describe('should get all Users and achieve authorisation', () => {
    it('should block un logged user', (done) => {
        chai
            .request(app)
            .get('/allUsers')
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                describe('CRUDs responce messages', () => {
                    if (res.body.statusCode === 406) {
                        it('should check for unthorisation', (done) => {
                            assert.equal(res.statusCode, 406)
                            assert.equal(res.body.message, "Please login")
                            assert.equal(res.body.data[0], "Login Page")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })
                    }


                    it('should authenticate an admin', (done) => {
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
                                describe("Admin authentication responce messages testing", function () {
                                    if (res.body.statusCode === 400) {
                                        it.skip('should check for admin authentication successfulness', (done) => {
                                            //testing for success
                                            assert.equal(res.statusCode, 200)
                                            assert.equal(res.body.message, "Admin log in succesful")
                                            //assert.equal(res.body.data[0], "Login Page")
                                            //assert.ok((res.body.data[0] === "Login Page"))
                                            done()
                                        })
                                        it("should check admin authentication error messages", (done) => {

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
                                        it('should test admin authentication successfulness', (done) => {
                                            //testing for success
                                            assert.equal(res.statusCode, 200)
                                            assert.equal(res.body.message, "Admin log in succesful")
                                            //assert.equal(res.body.data[0], "Login Page")
                                            //assert.ok((res.body.data[0] === "Login Page")
                                            done()
                                        })

                                        it('should get all users', (done) => {
                                            chai
                                                .request(app)
                                                .get('/allUsers')
                                                .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM3NTBiNDcwZjkwOWY4Zjg2NTEwNCIsImlhdCI6MTY3MTYwOTA2OSwiZXhwIjoxNjcxODY4MjY5fQ.MboSGiMEg7ck44qkmtLCHE4DCHp7Fb4NFcA8AvBXHhw')
                                                .end((err, res) => {
                                                    if (err) {
                                                        return done(err)
                                                    }

                                                    if (res.body.statusCode === 200) {
                                                        it('should check for geting all user', (done) => {
                                                            assert.equal(res.statusCode, 200)
                                                            assert.equal(res.body.message, "Successfully")
                                                            assert.equal(res.body.data.admin[0].email, "fabricei645@gmail.com")
                                                            //assert.ok((res.body.data[0] === "Login Page"))
                                                            done()
                                                        })
                                                    }
                                                    else{
                                                        console.log('statusCode not equal to 200')
                                                    }
                                                    done()
                                                })

                                        })

                                        it.skip("should check admin authentication error messages", (done) => {

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
                    done()
                })
            })
    })

})

*/