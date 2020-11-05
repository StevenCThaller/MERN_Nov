const express = require('express'); // import express for our server
const app = express(); // declaring our app as an express application

// To handle post request data:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes/routes')(app);

app.listen(8000, () => console.log("Now listening on port 8000"));