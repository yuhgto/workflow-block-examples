const jwt = require('jsonwebtoken');

async function listProducts(req, res) {
    res.status(200).json([
        'Socks',
        'Shoes',
        'Apples'
    ])
};

module.exports = {
    listProducts,
}