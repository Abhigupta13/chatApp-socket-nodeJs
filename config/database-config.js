const mongoose = require('mongoose')
const password = encodeURIComponent("Akg@13579");
const connect = async () => {
    try {
        const connect = await mongoose.connect(
            `mongodb+srv://AKGROCKX:${password}@cluster-akg.qw0qmd8.mongodb.net/chatapp`
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected : ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit();

    }
};

module.exports = connect;
//mongodb+srv://DJ0212:devansh%400212@cluster0.djsnamb.mongodb.net