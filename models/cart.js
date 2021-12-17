// const fs = require('fs');
// const path = require('path');
// const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

// module.exports = class Cart {
//     static addProduct(id) {
//         fs.readFile(p, (err, fileContent) => {
//             let cart = { products: [], totalPrice: 0 };
//             if(!err) cart = JSON.parse(fileContent);
//             const exist = cart.products.findIndex(product => product.id === id);
//             const existProduct = cart.products[exist];
//             console.log(existProduct);
//             let updated;
//             if(existProduct) {
//                 updated = { ...existProduct };
//                 updated.qty++;

//                 cart.products = [...cart.products];
//                 cart.products[exist] = updated;
//             }
//             else {
//                 updated = { id: id, qty: 1 };
//                 cart.products = [...cart.products, updated];
//             }
//             // cart.totalPrice += productPrice;
//             fs.writeFile(p, JSON.stringify(cart), err => {
//                 console.log(err);
//             })
//         })
//     }
// };
const getDb = require('../util/database');

module.exports = class Cart {
    static fetchAll() {
        const db = getDb();
        return db.collection('cart')
        .find()
        .toArray()
        .then(products => {
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static addProduct(product) {
        const db = getDb();
        return db.collection('cart')
        .insertOne(product)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }
};