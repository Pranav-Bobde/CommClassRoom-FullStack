//Import Exprees JS Library
const express = require("express");
//Create a Router App
const app = express.Router();

//Temporary User's Data
const Users = require("../../constants/Users.json")
//Export the Router
module.exports = app;