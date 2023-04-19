const express = require('express');
const app = express();
const productAPI = require('./features/product/api');
const fakeProducts = require('./db/fake/products');
const todoAPI = require('./features/todo/api');
const FEATURE = require('./features/types');

// connect to mongodb db
require('./db/database');
const PORT = process.env.PORT || 8080;

// const featureArg = process.argv[2];

// switch(featureArg) {
//     case FEATURE.PRODUCT: {
//         console.log('run feature PRODUCT');
//     }

//     case FEATURE.TODO: {

//     }
// }

productAPI(app);
todoAPI(app);

app.listen(
    PORT,
    () => {
        console.log(`I'm listening on port ${PORT}`);
    }
)
