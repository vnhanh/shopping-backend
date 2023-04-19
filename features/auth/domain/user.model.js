var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
}, {
    methods: {
        find() {
            return mongoose.model('User').find({username: this.username});
        },
        register() {
            return new Promise((resolve, reject) => {
                try {
                    this.find().exec((err, user) => {
                        if (err) {
                            reject(err);
                        } else if (Object.keys(user).length > 0) {
                            reject('This user existed');
                        } else {
                            this.save();
                            resolve(true);
                        }
                    });
                } catch (err) {
                    console.log('after finding - catch exception ' + err);
                    reject(err);
                }
            });
        }
}});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
