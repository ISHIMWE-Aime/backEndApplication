const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert

const { app } = require('../app')
chai.use(chaiHttp)

describe('Admin CRUDs operation', () => {

    //Get all user
    it('should get all users all respond with error message', (done) => {
        chai
            .request(app)
            .get('/allUsers')
            .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM3NTBiNDcwZjkwOWY4Zjg2NTEwNCIsImlhdCI6MTY3MTYwOTA2OSwiZXhwIjoxNjcxODY4MjY5fQ.MboSGiMEg7ck44qkmtLCHE4DCHp7Fb4NFcA8AvBXHhw')
            .end((err, res) => {
                if (err) {
                    return done(err)
                }

                describe('Get all user responce messages', () => {
                    if (res.body.statusCode === 200) {
                        it('should check for geting all user', (done) => {
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, "Successfully")
                            assert.equal(res.body.data.admin[0].email, "fabricei645@gmail.com")
                            //assert.ok((res.body.data[0] === "Login Page"))
                            done()
                        })
                    }
                    else {
                        console.log('statusCode not equal to 200')
                    }
                    done()
                })

            })

    })
    //delete one user
    it('should delete one specified user', (done) => {
        chai
            .request(app)
            .delete('/deleteOneUser/63a1a1c7b51ecdb4a5330d80')
            .set('Cookie', 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM3NTBiNDcwZjkwOWY4Zjg2NTEwNCIsImlhdCI6MTY3MTYwOTA2OSwiZXhwIjoxNjcxODY4MjY5fQ.MboSGiMEg7ck44qkmtLCHE4DCHp7Fb4NFcA8AvBXHhw')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }

                describe('Deletation responce messages', () => {
                    if (res.body.statusCode === 200) {
                        //console.log("if is runn")
                        it('should check for deletation ', (done) => {
                            assert.equal(res.statusCode, 200)
                            assert.equal(res.body.message, 'Successful')
                            done()
                        })
                    }
                    else {
                        //console.log("else is runn")
                        it('should check for presence of user id inmy DB', (done) => {
                            assert.equal(res.statusCode, 404)
                            assert.equal(res.body.message, 'User Not Found')
                            done()
                        })
                    }

                    if (res.body.statusCode === 400) {
                        console.log("400 is runn")
                        it('should check for a valid user id', (done) => {
                            assert.equal(res.statusCode, 400)
                            assert.equal(res.body.message, "Invalid user id")
                            done()
                        })
                    }
                    done()
                })

            })
    })
})
