const express = require('express');
const { getProducts, getIndex, getCart, getCheckout, getOrders, getProduct, postCart } = require('../controllers/customer');
const router = express.Router();

router.get('/', getIndex);

router.get('/products/:id', getProduct);

router.get('/products', getProducts);

router.get('/cart', getCart);
router.post('/cart', postCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

module.exports = router;