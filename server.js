const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const passport   = require('passport');
const path       = require("path")

const db           = require('./config/keys').mongoURI;
const users        = require('./routes/api/users');
const brands       = require('./routes/api/brands');
const products     = require('./routes/api/products');
const conditions   = require('./routes/api/conditions');

const PORT = process.env.PORT || 3000;

const app  = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log('DB Connected'))
        .catch(err => console.log(err));

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, "client", "build")))

require('./config/passport')(passport);

app.use('/api/users', users);
app.use('/api/brands', brands);
app.use('/api/products', products);
app.use('/api/conditions', conditions);

// Server static assets if in production
// if (process.env.NODE_ENV === 'production') {
// ... other app.use middleware 

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// }

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))