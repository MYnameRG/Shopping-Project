const Product = require("../models/product");

module.exports = {
    fetchAdminPage: (req, res) => {
        res.render('admin/add-products');
        res.end();
    },

    fetchEditProduct: (req, res) => {
        const id = req.params.id;
        Product.fetch(id)
            .then(product => {
                // console.log(product);
                res.render('admin/edit-products', { product });
            })
            .catch(err => {
                console.log(err);
            })
        // Product.fetchProduct((products) => {
        //     const product = products.find(product => product.id === id);
        //     res.render('admin/edit-products', { product });
        // });
    },

    editTheProduct: (req, res) => {
        const updateProduct = new Product(req.body.title, req.body.price, req.body.id);
        Product.update(updateProduct)
            .then(result => {
                console.log('updated');
                Product.fetchAll()
                    .then(products => {
                        res.render('admin/avail-products', { products });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            });
        // Product.fetch((products) => {
        //     products = products.map(product => {
        //         if(product.id === req.body.id) return updateProduct;
        //         return product;
        //     });
        //     Product.updateProduct(products);            
        //     res.render('admin/avail-products', { products });
        // });
    },

    deleteTheProduct: (req, res) => {
        Product.delete(req.params.id)
        .then(result => {
            Product.fetchAll()
                    .then(products => {
                        res.render('admin/avail-products', { products });
                    })
                    .catch(err => {
                        console.log(err);
                    })
        })
        .catch(err => {
            console.log(err);
        })
        // Product.fetch((products) => {
        //     products = products.filter(product => {
        //         if (product.id !== req.params.id) return product;
        //     });
        //     Product.updateProduct(products);
        //     res.render('admin/avail-products', { products });
        // });
    },

    addTheProduct: (req, res) => {
        const product = new Product(req.body.title, req.body.price);
        product
            .save()
            .then(() => {
                console.log('Product added successfully');
                res.render('admin/add-products');
            })
            .catch(err => {
                console.log(err);
            });
        // product.add();
        // res.redirect('/admin/add-products');
    },

    getProducts: (req, res) => {
        Product.fetchAll()
            .then(products => {
                res.render('admin/avail-products', { products });
            })
            .catch(err => {
                console.log(err);
            })
        // Product.fetch((products) => {
        //     res.render('admin/avail-products', { products });
        //     res.end();
        // });
    }
}