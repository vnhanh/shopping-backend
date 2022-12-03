var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    discount: Number,
    available: Boolean,
    imgUrl: String,
});

module.exports = mongoose.model('Product', productSchema);
