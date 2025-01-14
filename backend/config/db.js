const mongoose = require('mongoose');
require('dotenv').config()
const mongo_url = process.env.MONGO_URL;
const connectDB = async () => {
    console.log('MongoDB URL:', mongo_url);

    try {
        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDb Connected Sucessfully",)

    }
    catch (error) {
        console.log('Database is not Connected', error.messsage);
        process.exit(1);

    }
};

module.exports = connectDB;

