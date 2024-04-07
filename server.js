const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 5000;
const app = express();

// Security enhancements
app.use(helmet());
app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
app.use('/api', recipeController);

// Catch-all Route for 404 Errors
app.get('*', (req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Error Handling Middleware (basic example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
