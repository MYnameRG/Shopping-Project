// const fs = require('fs');
// const path = require('path');
// const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
// const p1 = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

// module.exports = class Product {
//     constructor(title, price, id) {
//         this.id = (id == null) ? Math.random().toString() : id;
//         this.title = title;
//         this.price = price;
//     }

//     add() {
//         fs.readFile(p, (err, fileContent) => {
//             let products = [];
//             if(!err) {
//                 products = JSON.parse(fileContent);
//             }
//             products.push(this);
//             fs.writeFile(p, JSON.stringify(products), err => {
//                 console.log(err);
//             });
//         });
//     }

//     static fetch(callback) {
//         fs.readFile(p, (err, fileContent) => {
//             if (err) callback([]);
//             callback(JSON.parse(fileContent));
//         });
//     }

//     static fetchProduct(callback) {
//         fs.readFile(p, (err, fileContent) => {
//             if (err) callback([]);
//             callback(JSON.parse(fileContent));
//         });
//     }

//     static updateProduct(products) {
//         fs.writeFile(p, JSON.stringify(products), err => {
//             console.log(err);
//         });
//     }

//     static fetchCart(callback) {
//         fs.readFile(p1, (err, fileContent) => {
//             if (err) callback([]);
//             callback(JSON.parse(fileContent));
//         });
//     }
// };

const getDb = require('../util/database');

class Product {
    constructor(title, price, id) {
        this.id = (id == null) ? Math.random().toString() : id;
        this.title = title;
        this.price = price;
    }

    save() {
        const db = getDb();
        return db.collection('products')
        .insertOne(this)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll() {
        const db = getDb();
        return db.collection('products')
        .find()
        .toArray()
        .then(products => {
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetch(id) {
        const db = getDb();
        return db.collection('products')
        .find({ id: id })
        .next()
        .then(product => {
            // console.log(product);
            return product;
        })
        .catch(err => {
            console.log(err);
        })
    }

    static update(product) {
        const db = getDb();
        return db.collection('products')
        .updateOne({ id: product.id }, { $set: product });
    }

    static delete(id) {
        const db = getDb();
        return db.collection('products')
        .deleteOne({ id: id })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }
}

module.exports = Product;