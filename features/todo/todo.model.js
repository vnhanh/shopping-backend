var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    id: String,
    name: String,
    done: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema);
