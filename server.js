require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const app = express();

// Ensure you're using the correct environment variable for your MongoDB URI.
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

// ROUTES
app.get('/', (req, res) => {
 res.send('Welcome to MY recipe app');
});

const recipeController = require('./controllers/recipeController');
app.use('/recipes', recipeController);

app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
});

// ERROR PAGE
app.get('*', (req, res) => {
 res.status(404).send('404 Page Not Found');
});

