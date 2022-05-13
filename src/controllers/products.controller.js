const productData = require('../data/products/index');
const getProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await productData.getById(productId);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getProduct
}