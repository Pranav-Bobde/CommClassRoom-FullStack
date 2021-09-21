//Import Exprees JS Library
const express = require("express");
//Create a Router App
const app = express.Router();

let CurrentUser = null;

//Endpoint to check current logged in user
app.get("/login", (req, res) => {
    if(CurrentUser) {
        res.json(CurrentUser);
    } else {
        res.status(400).json({
            Error: "Not Logged In."
        })
    }
});

//Endpoint to login a user
app.post("/login", (req, res) => {
    res.json(req.body);
})

//Export the Router
module.exports = app;