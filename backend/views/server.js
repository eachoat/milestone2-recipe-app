require('dotenv').config();
const express = require('express');
const recipeRouter = require('../controllers/recipes_controllers');
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require('./dataBase');
connectDB((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB, server not started');
    return;
  }
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', recipeRouter);


// ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Food!'); 
});



app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('You broke it!');

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
