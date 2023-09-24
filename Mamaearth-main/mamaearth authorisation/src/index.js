const express = require("express");
// const path = require("path")
//const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const {register,login}= require("./controllers/auth.controller")
const userController = require("./controllers/user.controller")

const cors = require("cors")


const app = express()
app.use(cors())

//app.use("/",express.static(path.join(__dirname,'static')))
app.use(express.json())
// app.use(bodyParser.json())




app.post("/register",register)
app.post("/login",login)
app.use("/users",userController)



module.exports= app
