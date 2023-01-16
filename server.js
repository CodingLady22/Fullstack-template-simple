// todo - Declare Variables
const express = require("express")
const app = express()
const PORT = 4500
const mongoose = require("mongoose")
const homeRoutes = require('./routes/home')
// const homeRoutes = require('./routes/home')


    //*Import functions/routes
    const connectDB = require("./config/database") // we set up our connection fxn to the db in a file under config folder. 

require('dotenv').config({path: './config/.env'})


// todo - connect to Database
connectDB() // We call the the fxn we just imported from the config


//todo - Set Middleware
app.set("view engine", "ejs") // setting our view engine to ejs
app.set(express.static("public")) //telling express to look in public folder for static files
app.use(express.urlencoded({ extended: true }))


//todo - Set Routes
app.use('/', homeRoutes)


//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))