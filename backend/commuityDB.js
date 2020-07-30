
import { stringify } from 'querystring';
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/communityDB', {useNewUrlParser: true, useUnifiedTopology: true});
import { isEmail } from 'validator';


const customerSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    mobile: Number,
    email :{
        validate:[ isEmail,'invalid email']
    } ,
    _communityId: Number,
    password: String,


});

const creatorTableSchema = new mongoose.Schema({
    name_bussiness: String,
    description: String,
    //category:
    //products:
});

const productsTableSchema = new mongoose.Schema({
    _product_id: Number,
    name: String,
    price: Number,
    description: String,
    details: String,
    creatorName: String,
    tags: String,
    reviews: [{
        authorName: String,
        rating:Number,
        review: String,
    }],

});


//creating models

var customer = mongoose.model('customer', customerSchema);

var testCus = new customer({
    _id: 1,
    name: "vidhu",
    mobile: 9849983376,
    email :'vtvidhathatallapally@gmail.com' ,
    _communityId: 1,
    password: "test123",

})

testCus.save();