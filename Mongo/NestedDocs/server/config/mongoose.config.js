const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/nested_demo", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Something went wrong: ", err));