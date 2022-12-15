const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/worker-service');

mongoose.connection.on('connected', function () { 
    console.log('Mongoose connected');
});

mongoose.connection.on('error', function () { 
    console.log('Error while connecting the mongoose');
});

mongoose.connection.on('disconnect', function () { 
    console.log('Mongoose disconnected');
});