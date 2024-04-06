const mongoose = require('mongoose');


const uri = "mongodb://localhost:27017/recipe";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));
