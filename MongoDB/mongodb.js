require('../settings');
const mongoose = require('mongoose');

function connectMongoDb() {
    mongoose.connect(MONGO_DB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection Error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB!');
    });
};

module.exports.connectMongoDb = connectMongoDb;