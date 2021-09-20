//import the Express JS Framework
const express = require("express");
//Initialising an app instance.
const app = express();
//Configure a port address.
const port = 5000;
app.listen(port, () => {
    console.log('Server started in port ${port}.');
});