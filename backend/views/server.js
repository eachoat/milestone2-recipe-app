require('dotenv').config();
const express = require('express');
const recipeRouter = require('./controllers/recipes_controllers'); 
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require('./dataBase'); 

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.use('/api', recipeRouter);

// ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Welcome to the Food API!'); 
});

// Global error handler
app.use((err, req, res, next) => { 
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('Failed to connect to MongoDB, server not started:', err);
});
