const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname: 
    {
        type: String,
        required:true
    },
    lastname: 
    {
        type: String,
    },
    email:
    {
        type: String,
        required:true
    },
    password:
    {
        type: String,
        required:true
    },
    cart: 
    {
        type: Array,
        default:[]
    },
    history: 
    {
        type: Array,
        default:[]
    },
    role:
    {
        type:Number,
        default:0
    }
})

module.exports = User = mongoose.model('users', UserSchema);