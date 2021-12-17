const getDb = require('../util/database');

class User {
    constructor(username, email, id) {
        this.username = username;
        this.email = email;
        this.id = (id == null) ? Math.random().toString() : id;
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
    }

    static fetch(id) {
        const db = getDb();
        return db.collection('users').find({ id: id }).next();
    }
}

module.exports = User;