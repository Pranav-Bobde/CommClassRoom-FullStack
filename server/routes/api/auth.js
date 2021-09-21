//Import Exprees JS Library
const express = require("express");
//Create a Router App
const app = express.Router();

//Temporary User's Data
const Users = {
    Pranav: {
        Name: "Praveen Kumar Purushothaman",
        Password: "Praveen",
        Type: "Admin", //Student, Mentor, Admin, Disabled
        Verified: true,

        Personal: {
            Email: "praveen@gmail.com",
            Phone: "+447894561230"
        },
        CreatedAt: new Date()
    },
    PrPraveen: {
        Name: "Pranav Bobde",
        Password: "Pranav",
        Type: "Student", //Student, Mentor, Admin, Disabled
        Verified: false,
        Personal: {
            Email: "pranav@gmail.com",
            Phone: "+919876543210"
        },
        CreatedAt: new Date()
    }

};
//Export the Router
module.exports = app;