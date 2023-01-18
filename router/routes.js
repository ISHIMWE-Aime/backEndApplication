const express = require('express')
const router = express.Router()
const controllers = require('../AppControllers/controllers')
const { requireAuth, checkUser } = require('../middlerware/middleware')

/******************* Swagger Schemas **********************/

/**
 * @swagger
 * components:
 *   schemas:
 *     blog:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - content
 *         - imageUlr
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the blog
 *         title:
 *           type: string
 *           description: The blog title
 *         author:
 *           type: string
 *           description: Provide blog author name
 *         content:
 *           type: string
 *           description: The blog suthor
 *         imageUlr:
 *           type: array
 *           description: The blog background image
 *         _v:
 *           type: string
 *           description: Version
 *       example:
 *           title: The new Turing Omnibus
 *           author: ISHIMWE Aime Fabrice
 *           content: Alexander K. Danny
 *           imageUlr: https://www.freeImages.com
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    User Log in:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        _id:
 *           type: string
 *           description: The auto-generated id of the blog
 *        email:
 *          type: string
 *          default: mario@google.com
 *        password:
 *          type: string
 *          default: Teta@2005
 *        _v:
 *          type: string
 *          description: Version
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    coment:
 *      type: object
 *      required:
 *        - blogId
 *        - userId
 *        - comentData
 *      properties:
 *        blogId:
 *           type: string
 *           description: The id of the blog you want to coment on
 *        userId:
 *          type: string
 *          description: The id of comentor
 *        comentData:
 *          type: string
 *          description: The coment you want to post
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    like:
 *      type: object
 *      required:
 *        - blogId
 *        - likes
 *        - likersIds
 *      properties:
 *        blogId:
 *           type: string
 *           description: The id of the blog you want to like
 *        likersIds:
 *          type: array
 *          description: likersIds
 *      example:
 *          blogId: d5fE_ass
 *          likerId: d5fE_ass847878787
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    UserMessages:
 *      type: object
 *      required:
 *          - fullname
 *          - email
 *          - UserMessage
 *      properties:
 *          fullname:
 *              type: string
 *              description: User message
 *          email:
 *              type: string
 *              description: User email
 *          UserMessage: 
 *              type: string
 *              description: message from user to admin
 *      example: 
 *          fullname: ISHIMWE Aime Fabrice
 *          email: fabricei645@gmail.com
 *          UserMessage: Hi, I like your blogs!
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Sign Up:
 *      type: object
 *      required:
 *        - firstName
 *        - middleName
 *        - lastName
 *        - email
 *        - userPreference
 *        - phoneCountryCode
 *        - phone
 *        - password
 *      properties:
 *        firstName:
 *          type: String
 *          default: ISHIMWE
 *        middleName:
 *          type: String
 *          default: Aime
 *          description: (Optional)
 *        lastName:
 *          type: String
 *          default: Honore
 *        email:
 *          type: String
 *          default: mario@gmail.com
 *        userPreference:
 *          type: String
 *          default: Web-development
 *        phoneCountryCode:
 *          type: String
 *          default: +250
 *        phone:
 *          type: String
 *          default: 0787414868
 *        password:
 *          type: String
 *          default: Teta@2005
 */
/******************* End Swagger Schemas **********************/
//home page 
router.get('/', controllers.home)

/**
 * @swagger
 * /adminRegister:
 *   post:
 *     summary: Admin registration in my db
 *     tags: [Authantication routes]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Log in'
 *     responses:
 *       '200':
 *         description: Your registration done successfully
 */

//admin register
router.post('/adminRegister', controllers.adminRegister)

/**
 * @swagger
 * /userRegister:
 *   post:
 *     summary: create your account
 *     tags: [Authantication routes]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sign Up'
 *     responses:
 *       '200':
 *         description: Your registration done successfully
 */

//user register routes
router.post('/userRegister', controllers.userRegister)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in  into your account to get more prevalleges
 *     tags: [Authantication routes]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Log in'
 *     responses:
 *       '200':
 *         description: user log in succesfully
 *       400:
 *         description: Bad request
 */

//user login
router.post('/login', controllers.Userlogin_post)

/**
 * @swagger
 * /adminLogin:
 *   post:
 *     summary: Use this option, if you are only an admin
 *     tags: [Authantication routes]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Log in'
 *     responses:
 *       '200':
 *         description: user log in succesfully
 *       400:
 *         description: Bad request
 */

//admin login
router.post('/adminLogin', controllers.Adminlogin_post)

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Log out
 *     tags: [Authantication routes]
 *     application/json:
 *           schema:
 *             type: object
 *     responses:
 *       '200':
 *         description: You are logged out successfully
 *       500:
 *         description: Internal Server Error
 */

//user logout
router.get('/logout', controllers.Userlogout_get)

/**
 * @swagger
 * /allUsers:
 *    get:
 *      tags: [Admin CRUDs Ops on users]
 *      summary: get all users
 *      description: returns all blogs from our database
 *      responses:
 *        200:
 *          description: blogs get all blogs from our api
 *        404:
 *          description: not found
 *        406:
 *          description: Please log in
 */
//Get all users
router.get('/allUsers', requireAuth, controllers.allUsers)

/**
 * @swagger
 * /getOneUser/{blogId}:
 *    get:
 *      tags: [Admin CRUDs Ops on users]
 *      summary: get a one user
 *      parameters:
 *        - name: blogId
 *          in: path
 *          description: Provide userId
 *          required: true
 *      responses:
 *        200:
 *          description: success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 *        406:
 *          description: Please log in
 */
//Get one user
router.get("/getOneUser/:id", requireAuth, controllers.getOneUser)

/**
 * @swagger
 * /deleteOneUser/{blogId}:
 *    delete:
 *      tags: [Admin CRUDs Ops on users]
 *      summary: Delete a one user
 *      parameters:
 *        - name: blogId
 *          in: path
 *          description: Provide userId
 *          required: true
 *      responses:
 *        200:
 *          description: success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 *        406:
 *          description: Please log in
 */
//Delete one user
router.delete("/deleteOneUser/:id", requireAuth, controllers.deleteOneUser)

/**
 * @swagger
 * /deleteAllUser:
 *    delete:
 *      tags: [Admin CRUDs Ops on users]
 *      summary: Delete all users
 *      responses:
 *        200:
 *          description: All Deleted Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 *        406:
 *          description: Please log in
 */
//Delete all user
router.delete('/deleteAllUser', requireAuth, controllers.deleteAllUser)

/**************** CRUDs op routes*******************/

/**
 * @swagger
 * /allBlogs:
 *    get:
 *      tags: [Admin CRUDs Ops on Blogs]
 *      summary: get all Blogs
 *      description: returns all blogs from our database
 *      responses:
 *        200:
 *          description: blogs get all blogs from our api
 *        406:
 *          description: Please log in
 */

// Get all blogs
router.get("/allBlogs", requireAuth, controllers.allBlogs)

/**
 * @swagger
 * /blog/{blogId}:
 *    get:
 *      tags: [Admin CRUDs Ops on Blogs]
 *      summary: provide blog id you want to get
 *      parameters:
 *        - name: blogId
 *          in: path
 *          description: provide blogId
 *          required: true
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/blog'
 *        400:
 *          description: Please provide blog id
 *        404:
 *          description: not found
 */
//Get individual blog
router.get("/blog/:id", requireAuth, controllers.getOneBlog)

/**
 * @swagger
 * /createBlog:
 *   post:
 *     summary: create new blog
 *     tags: [Admin CRUDs Ops on Blogs]
 *     requestBody:
 *       description: please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/blog'
 *     responses:
 *       '201':
 *         description: Created successfully
 */
//Create a blog
router.post("/createBlog", requireAuth, controllers.createBlog)

/**
 * @swagger
 * /updateBlog/{blogId}:
 *   patch:
 *     summary: Update a blog
 *     tags: [Admin CRUDs Ops on Blogs]
 *     parameters:
 *      - name: blogId
 *        in: path
 *        description: provide blogId
 *        required: true
 *     requestBody:
 *       description: Please fill the field(s) you want to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              blog:
 *                type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: The auto-generated id of the blog
 *                title:
 *                  type: string
 *                  description: The blog title
 *                content:
 *                  type: string
 *                  description: The blog suthor
 *                imageUlr:
 *                  type: array
 *                  description: The blog background image
 *                _v:
 *                  type: string
 *                  description: Version
 *              example:
 *                  id: d5fE_ass
 *                  title: The new Turing Omnibus
 *                  content: Alexander K. Danny
 *                  imageUlr: https://www.freeImages.com
 *     responses:
 *       '201':
 *         description: Created successfuly
 */
//Update a blog (patch)
router.patch("/updateBlog/:id", requireAuth, controllers.updateBlog)

/**
 * @swagger
 * /deleteOneBlog/{blogId}:
 *    delete:
 *      tags: [Admin CRUDs Ops on Blogs]
 *      summary: Delete a one blog
 *      parameters:
 *        - name: blogId
 *          in: path
 *          description: provide blogId
 *          required: true
 *      responses:
 *        200:
 *          description: success
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 */
//Delete a blog 
router.delete("/deleteOneBlog/:id", requireAuth, controllers.deleteOneBlog)

/**
 * @swagger
 * /deleteAllBlogs:
 *    delete:
 *      tags: [Admin CRUDs Ops on Blogs]
 *      summary: Delete all blog
 *      responses:
 *        200:
 *          description: All Deleted Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 */
//Delete all blogs 
router.delete("/deleteAllBlogs", requireAuth, controllers.deleteAllBlogs)

/**
 * @swagger
 * /publishBlog:
 *   post:
 *     summary: Publish new blog
 *     tags: [Admin Blog Post]
 *     requestBody:
 *       description: please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/blog'
 *     responses:
 *       '201':
 *         description: Published successfully
 */
//Publish a blog
router.post("/publishBlog", requireAuth, controllers.publishBlog)

/**
 * @swagger
 * /publishedBlogs:
 *    get:
 *      tags: [Admin Blog Post]
 *      summary: Get all published Blogs
 *      description: Returns all blogs from our database
 *      responses:
 *        200:
 *          description: Get all published blogs succefully
 *        406:
 *          description: Please log in
 */
// Get published all blogs
router.get("/publishedBlogs", requireAuth, controllers.publishedBlogs)

/************* USER Ops *****************/

/**
 * @swagger
 * /Blogs:
 *    get:
 *      tags: [User Ops]
 *      summary: get all Blogs
 *      description: returns all blogs from our database
 *      responses:
 *        200:
 *          description: blogs get all blogs from our api
 *        400:
 *          description: Bad request
 */
// Get all blogs
/*remember to use this 'checkUser' function for tracking the user*/
router.get("/Blogs", controllers.allBlogs)

/************************** Reactions form users *************************/
/**
 * @swagger
 * /createComent:
 *   post:
 *     summary: create new coment
 *     tags: [User Reactions]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/coment'
 *     responses:
 *       '201':
 *         description: Created successfully
 */
router.post("/createComent", checkUser, controllers.coment)

/**
 * @swagger
 * /like:
 *   post:
 *     summary: Like a blog
 *     tags: [User Reactions]
 *     requestBody:
 *       description: Please fill all required fields
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/like'
 *     responses:
 *       '201':
 *         description: Liked successfully
 */
router.post("/like", checkUser,controllers.like)

/**
 * @swagger
 * /allLikes:
 *    delete:
 *      tags: [Admin CRUDs Ops on User reactions]
 *      summary: Delete all likes
 *      responses:
 *        200:
 *          description: All Deleted Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        404:
 *          description: not found
 *        406:
 *          description: Please log in
 */
//Delete all user
router.delete('/allLikes', requireAuth, controllers.deleteAllLikes)

/**
 * @swagger
 * /sendMessage:
 *    post:
 *      summary: Send message to admin
 *      tags: [User Ops]
 *      requestBody:
 *        description: Please fill all required informations
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schemas/UserMessages'
 *      responses:
 *        200:
 *          description: All Deleted Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *        400:
 *          description: Message not Sent
 *        406:
 *          description: Please log in
 */
// Sent message to admim
router.post('/sendMessage', checkUser, controllers.saveMessage)
/**
 * @swagger
 * /allMessages:
 *    get:
 *      summary: Get all messages from users
 *      tags: [Admin CRUDs Ops on users]
 *      responses:
 *        200:
 *          description: All Deleted Successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#components/schemas/UserMessages'
 *        400:
 *          description: Message not Sent
 *        406:
 *          description: Please log in
 */
// Get all messages from user
router.get('/allMessages', requireAuth, controllers.messageFromUsers)
module.exports = router