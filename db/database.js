var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping', {useNewUrlParser: true})
.then(() => {
    console.log('database is connected successfully');
}).catch(err => {
    console.log(`connect database failed with error: ${err}`);
});
// var conn = mongoose.connection;

// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.on('disconnected', function() {
//     console.log('database is disconnected successfully');
// })

module.exports = mongoose.connection;
