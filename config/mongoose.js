const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://patidarhariom134:gd3iNay5qB6pi3WQ@cluster1.eulll5l.mongodb.net/?retryWrites=true&w=majority')

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, "Error in connecting to mongodb"));

 db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
 })

 module.exports = db;