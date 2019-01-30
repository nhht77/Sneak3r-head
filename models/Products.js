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
        type: Boolean,
        default: true,
    },
    shipping:
    {
        type: Boolean,
        default: false,
    },
    sold:
    {
        type:Number,
        default:0
    },
    colors:
    {
        type:[String],
        required:true
    },
    sizes:
    {
        type:[Number],
        required:true
    },
    images:
    {
        type:Array,
        default:[]
    }
},
{
    timestamps:true
});

module.exports = Product = mongoose.model('products', ProductSchema);