const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const passport   = require('passport');
const cloudinary = require('cloudinary');
const path       = require("path");
const cors       = require("cors");

const users      = require('./routes/api/users');
const brands     = require('./routes/api/brands');
const products   = require('./routes/api/products');
const conditions = require('./routes/api/conditions');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app  = express();

cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_SECRET_API,
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true
      })
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/brands', brands);
app.use('/api/products', products);
app.use('/api/conditions', conditions);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
        
        app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
}

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
