const Cart = require("../models/cart");
// const { fetchProduct } = require("../models/product");
const Product = require("../models/product");

module.exports = {
    getProducts:  (req, res) => {
        Product.fetchAll()
        .then(products => {
            res.render('customer/product-list', { products });
        })
        .catch(err => {
            console.log(err);
        })
        // Product.fetch((products) => {
        //     res.render('customer/product-list', { products });
        //     res.end();
        // });
    },

    getProduct: (req, res) => {
        const id = req.params.id;
        Product.fetch(id)
        .then(product => {
            // console.log(product);
            res.render('customer/product-details', { product });
        })
        .catch(err => {
            console.log(err);
        })
        // fetchProduct((products) => {
        //     const product = products.find(product => product.id === id);
        //     res.render('customer/product-details', { product });
        // });
    },

    getIndex: (req, res) => {
        Product.fetchAll()
        .then(products => {
            res.render('customer/index', { products });
        })
        .catch(err => {
            console.log(err);
        })
        // Product.fetch((products) => {
        //     res.render('customer/index', { products });
        //     res.end();
        // });
    },

    getCart: (req, res) => {
        Cart.fetchAll()
        .then(products => {
            console.log(products);
            res.render('customer/cart', { products });
        })
        .catch(err => {
            console.log(err);
        })
        // Product.fetch((cart) => {
        //     res.render('customer/cart', { cart });
        //     res.end();
        // });
    },

    postCart: (req, res) => {
        const id = req.body.id;
        Cart.addProduct(id)
        .then(() => {
            // res.render('/cart')
            res.redirect('/cart');
        })
        .catch((err) => {
            console.log(err);
        });
        Cart.addProduct(id)
    },

    getOrders: (req, res) => {
        Product.fetch((products) => {
            res.render('customer/orders', { products });
            res.end();
        });
    },

    getCheckout: (req, res) => {
        res.render('customer/checkout');
    }
}