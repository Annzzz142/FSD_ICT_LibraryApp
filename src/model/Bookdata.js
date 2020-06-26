// even though we've installed mongoose, we havve to require it in order to use it

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

// access the schema from the mongoose package
const Schema = mongoose.Schema;

//create a schema for a single book
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

// create a model to use this schema
var Bookdata = mongoose.model('bookData', BookSchema);

// export
module.exports = Bookdata;