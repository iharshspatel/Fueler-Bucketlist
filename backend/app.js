const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleware = require("./middleware/error")

app.use(express.json())
app.use(cookieParser())

//  Route Imports
const test = require("./routes/testRoute")
const user = require("./routes/userRoute") 
app.use("/api/v1", test)
app.use("/api/v1", user)

// Middleware for Errors
app.use(errorMiddleware)


module.exports = app