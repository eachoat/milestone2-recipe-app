
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  

const PORT = process.env.PORT || 3009;
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Main Route
app.get('/', (req, res) => {
  res.send('Welcome to MY recipe app');
});

// Recipe Controller
const recipeController = require('./controllers/recipeController');
app.use('/recipes', recipeController);

// Server Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Catch-all Route for 404 Errors
app.get('*', (req, res, next) => {
  res.status(404).send('404 Page Not Found');
});
