const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// connect to db
const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDb Connected');
    }
    catch (e) {
        console.error(e.message);
        process.exit(1); // exit with a failure
    }
};

// export connectDb so we can use it in index
module.exports = connectDb;