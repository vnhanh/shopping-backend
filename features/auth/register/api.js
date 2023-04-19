const registerAPI = function(app) {

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
                        message: 'Encountered internal error'
                    })
                }
            });
        } catch(err) {
            console.log(err);
            res.status(500).send({
                message: 'Encountered internal error'
            });
        }
    });
    
}

module.exports = registerAPI;
