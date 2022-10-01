const express = require('express');
const app = express();
// connect to mongodb db
require('./db/database');
const User = require('./db/models/user.model');
const PORT = process.env.PORT || 8080;
const VALID_TOKEN = 'abc';
const CUSTOMER_ID = '0001';

app.use(express.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({username, password});

    try {
        newUser.register()
        .then( () => {
            res.status(200).send({message: 'Registered success'});
        })
        .catch(error => {
            if (error.includes("user existed")) {
                res.status(400).send({
                    message: 'Registered failed'
                })
            } else {
                res.status(500).send({
                    message: 'Ecountered internal error'
                })
            }
        });
    } catch(err) {
        console.log(err);
        res.status(500).send({
            message: 'Ecountered internal error'
        });
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log(`username: ${username}`);

    if (username === 'vnhanh') {
        res.status(200).send({
            access_token: 'token123',
            token_type: 'bearer',
            customer_id: 'id1'
        })
    } else {
        res.status(200).send({
            access_token: VALID_TOKEN,
            token_type: 'bearer',
            customer_id: CUSTOMER_ID
        })
    }
});

app.listen(
    PORT,
    () => {
        console.log(`I'm listening on port ${PORT}`);
    }
)
