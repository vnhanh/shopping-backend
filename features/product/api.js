const utils = require('../../common/util');
const Product = require('./product.model');

const findProductById = (id, res) => {
    Product.findOne({id: id}, (err, product) => {
        if (err || !product || utils.isObjectEmpty(product)) {
            res.status(500).send({
                message: 'Not found product'
            });
        } else {
            res.status(200).send({
                data: product
            });
        }
    });
}

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

    app.get('/products/:id', (req, res) => {
        const reqId = req.params.id;

        if (isNaN(reqId)) {
            res.status(400).send({
                message: 'Bad request'
            });
        } else {
            findProductById(reqId, res);
        }
    });
};

module.exports = productAPI;