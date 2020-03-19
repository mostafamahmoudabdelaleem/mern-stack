const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();
const port = process.env.PORT || 5000;

// uses body-parser middelware
app.use(bodyParser.json());

//DB configs
const db = require('./config/keys').mongoURI;

//connect DB
mongoose
    .connect(db)
    .then(() => console.log('DB Connected .....'))
    .catch(err => console.log(err))

app.use('/api/items/', items);

app.listen(port, () => {
    console.log(`Server Started at Port ${port}`);
});