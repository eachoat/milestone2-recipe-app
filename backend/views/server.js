require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // Ensure mongoose is required for DB operations
const path = require('path');
const methodOverride = require('method-override'); // For PUT/PATCH/DELETE requests in forms

const app = express();
const PORT = process.env.PORT || 3000;

// Require route controllers
const recipeRouter = require('./controllers/recipes_controllers');

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory
app.use(methodOverride('_method')); // Method override for forms


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Food API!');
});

app.use('/api/recipes', recipeRouter); 

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
