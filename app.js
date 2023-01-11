const routes = require('./router/routes')//imports "routes.js" file to get all the routes
const express = require("express") //import of express packages I have been downloaded.
const mongoose = require("mongoose") //for mongoose
const cookieParser = require('cookie-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'My-BRAND API',
			description: 'Example of CRUD API ',
			version: '1.0.0',
		},
		servers:[
			{
				url: "https://backendapplication.up.railway.app"
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
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(express.json())
app.use(cookieParser())
app.use(routes)

//'mongodb://localhost:27017/MyBranding'

"mongodb+srv://ISHIMWE-aime:Teta2005@cluster0.ytng98j.mongodb.net/MyBrand?retryWrites=true&w=majority"
mongoose
	.connect("mongodb+srv://ISHIMWE-aime:Teta2005@cluster0.ytng98j.mongodb.net/MyBrand?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(async () => {
		await app.listen(PORT, () => {
			console.log("Server has started!")
		})
	}).catch((err) => {
		console.log(err)
	})

module.exports = { app }