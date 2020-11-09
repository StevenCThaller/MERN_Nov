const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/config');

require('./routes/routes')(app);

app.listen(8000, () => console.log("Listening on port 8000"));