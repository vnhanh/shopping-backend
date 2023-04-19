
const loginAPI = function(app) {

    app.post('/login', async (req, res) => {
        const { username, password } = req.body;
    
        // don't know what is resolve but it still can run ??? magic =))
        await new Promise(resolve => {setTimeout(resolve, 2000)});
    
        console.log(`username: ${username}`);
    
        if (username === 'vnhanh') {
            res.status(200).send({
                access_token: 'token123',
                token_type: 'bearer',
                customer_id: 'id1'
            });
        } else {
            res.status(501).send('login failed');
        }
    });

}

module.exports = loginAPI;
