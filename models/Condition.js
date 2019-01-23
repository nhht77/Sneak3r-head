const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ConditionSchema = new Schema({
    name:
    {
        type:String,
        required: true,
        unique: 1
    }
})

module.exports = Condition = mongoose.model('conditions', ConditionSchema)