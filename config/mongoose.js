const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongooseFlights', {
    useNewUrlParser: true, 
    useCreateIndex: true 
});

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
    console.log('MongoDB has thrown a wrench in your shit fam', err);
})