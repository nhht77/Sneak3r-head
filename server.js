const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const passport   = require('passport');


const db        = require('./config/keys').mongoURI;
const users     = require('./routes/api/users');
const brands     = require('./routes/api/brands');
const products     = require('./routes/api/products');
const conditions  = require('./routes/api/conditions');

const PORT = 3000 || process.env.PORT;

const app  = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/brands', brands);
app.use('/api/products', products);
app.use('/api/conditions', conditions);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))