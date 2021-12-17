const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient;
let db;

module.exports = MongoClient
.connect('mongodb+srv://rohitgupta:rohitgupta@cluster0.vsjaz.mongodb.net/shopping-cart?retryWrites=true&w=majority')
.then(result => {
    console.log(result);
    db = result.db();
})
.catch(err => {
    console.log(err);
});

const getDb = () => {
    if(db) return db;
    throw 'No database found';
};

module.exports = getDb;