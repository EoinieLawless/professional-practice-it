//Define express
const express = require("express");
//Defining the app
const app = express();
//Import path
//const path = require ('path')
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
//Setting what port our server is on 
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.use('/', express.static(path.join(__dirname, '/public')))
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});