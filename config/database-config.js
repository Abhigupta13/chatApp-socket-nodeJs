const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/chatapp");
}

module.exports = connect;