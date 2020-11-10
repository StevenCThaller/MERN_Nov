const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // for cross origin resource sharing with our react application
app.use(express.json()); // returning json responses (?)
app.use(express.urlencoded({ extended: true })); // lets us decipher json in the request body from post requests

require('./config/mongoose.config'); // connect to the mongo database
require('./routes/routes')(app); // routing engine

app.listen(8000, () => console.log("Now listening on port 8000"));