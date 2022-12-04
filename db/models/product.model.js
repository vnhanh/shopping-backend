var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    discount: Number,
    available: Boolean,
    imgUrl: String,
});

module.exports = mongoose.model('Product', productSchema);
