const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: 
    {
        type: String,
        required
    },
    email:
    {
        type: String,
        required,
    },
    password:
    {
        type: String,
        required,
    },
    avatar:
    {
        type: String,
    },
    date:
    {
        type:Date,
        default: Date.now()
    }
})

module.export = User = mongoose.model('users', UserSchema);