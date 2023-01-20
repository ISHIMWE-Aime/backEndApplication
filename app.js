const routes = require('./router/routes')//imports "routes.js" file to get all the routes
const express = require("express") //import of express packages I have been downloaded.
const mongoose = require("mongoose") //for mongoose
const cookieParser = require('cookie-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'My-BRAND API',
			description: 'Example of CRUD API ',
			version: '1.0.0',
		},
		components: {
			securitySchemes: {
				jwt: {
					type: 'http',
					scheme: 'bearer',
					in: 'header',
					bearerFormat: 'JWT'
				}
			}
		},
		security: [
			{
				jwt: []
			}
		],
		servers:[
			{
				url: "https://backendapplication.up.railway.app"
			},
			{
				url: "http://localhost:5000"
			},
			{
				url: "https://important-red-beanie.cyclic.app"
			}
		]
	},
	// looks for configuration in specified directories
	apis: ['./router/*.js'],
}


const specs = swaggerJsDoc(options) //initialise swaggerJsDoc

const app = express()

// let corsOptions = 		{
// 	origin: true,
// 	credentials:  true
// }

//middlewares 
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use(routes)

//'mongodb://localhost:27017/MyBranding'

"mongodb+srv://ISHIMWE-aime:Teta2005@cluster0.ytng98j.mongodb.net/MyBrand?retryWrites=true&w=majority"
mongoose
	.connect("mongodb+srv://ISHIMWE-aime:Teta2005@cluster0.ytng98j.mongodb.net/MyBrand?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(async () => {
		await app.listen(PORT, () => {
			console.log("Server has started!")
		})
	}).catch((err) => {
		console.log(err)
	})

module.exports = { app }