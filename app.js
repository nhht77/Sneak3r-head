const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

const db = require('./config/key').mongoURI;

mongoose.connect(db, { useNewUrlParser: true }).then(() => console.log('DB Connected'))
                    .catch(err => console.log(err));

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello to Dev Connector');
})

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))