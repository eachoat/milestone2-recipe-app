const express = require('express');
const multer = require('multer');
const recipes = express.Router();
const Recipe = require('../models/recipes.js');

// Setup multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads'); 
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

// Index Page
recipes.get('/', (req, res) => {
    Recipe.find()
        .then(foundRecipes => {
            res.render('index', { recipes: foundRecipes });
        });
});

// NEW
recipes.get('/new', (req, res) => {
    res.render('new');
});

// CREATE with image upload
recipes.post('/recipes', upload.single('image'), (req, res) => {
   
    const imagePath = req.file ? req.file.path.replace('public', '') : '';
    Recipe.create({
        title: req.body.title,
        image: imagePath,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })
    .then(newRecipe => res.redirect(`/recipes/${newRecipe.id}`))
    .catch(err => {
        console.error('Error saving recipe to database:', err);
        res.status(500).send('Error saving recipe to database');
    });
});


module.exports = recipes;
