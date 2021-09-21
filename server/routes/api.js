//Import Exprees JS Library
const express = require("express");
//Create a Router App
const app = express.Router();
//Import the routes
const auth = require("./api/auth")
//Create a Get Request handler for /
app.get("/", (req, res) => {
    res.json("Welcome to Community Classroom API!");
})
//API routes handler
app.use("/auth", auth)

//Export the Router
module.exports = app;