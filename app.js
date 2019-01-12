const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

const db = require('./config/key').mongoURI;

const users = require('./routes/api/users');

const PORT = 3000 || process.env.PORT;


mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello to Dev Connector');
})

app.use('/api/users', users);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))