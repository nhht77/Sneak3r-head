const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const ProductSchema = new Schema({
    name:
    {
        type:String,
        required:true,
        unique:1
    },
    description:
    {
        type:String,
        required:true
    },
    price:
    {
        type: Number,
        required:true,
        maxlength:255
    },
    condition:
    {
        type: Schema.Types.ObjectId,
        ref:'conditions',
        required:true
    },
    brand:
    {
        type:Schema.Types.ObjectId,
        ref:'brands',
        required:true
    },
    avalaible:
    {
        type:Boolean,
        required:true
    },
    shipping:
    {
        type:Boolean,
        required:true
    },
    sold:
    {
        type:Number,
        default:0
    },
    color:
    {
        type:[String],
        required:true
    },
    size:
    {
        type:[String],
        required:true
    },
    images:
    {
        type:Array,
        default:[]
    }
});

module.exports = Product = mongoose.model('products', ProductSchema);