const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/website_db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send('Something broke!');
});

require('./routes/hotel')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})