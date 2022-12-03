const Product = require('../db/models/product.model');

const productAPI = function(app) {
    app.get('/products', async(req, res) => {
        const products = await Product.find({});

        if (typeof products === 'object') {
            res.status(200).send({
                data: products
            });
        } else {
            res.status(500).send({
                message: 'testing'
            });
        }
    });

    app.get('/products/:id', async(req, res) => {
        console.log(`Alan - api get product by id: ${req.params.id}`);
        res.status(500).send({
            message: 'testing get product by id'
        });
    });
};

module.exports = productAPI;