// step 1: import mongoose
const mongoose = require('mongoose');

// step 2: connect to our mongodb                   // step 3: declare some options
mongoose.connect('mongodb://localhost/november_mern', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log(`Uh oh, something happened!`, err))