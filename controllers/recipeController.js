const express = require('express');
const multer = require('multer');
const path = require('path');
const recipes = express.Router();
const Recipe = require('../models/recipes.js');

// Setup multer for image upload
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Index Page
recipes.get('/', (req, res) => {
    Recipe.find().then(foundRecipes => {
        res.render('index', { recipes: foundRecipes });
    });
});

// NEW
recipes.get('/new', (req, res) => {
    res.render('new');
});

// CREATE
recipes.post('/', upload.single('image'), (req, res) => {
    const { title, prepTime, createdAt, category, ingredients, instructions } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

    const recipe = new Recipe({
        title,
        prepTime,
        createdAt,
        image: imagePath,
        category,
        ingredients,
        instructions
    });

    recipe.save().then(() => {
        res.redirect('/recipes');
    }).catch(err => {
        console.error('Error saving recipe to database:', err);
        res.status(500).send('Error saving recipe to database');
    });
});

// DELETE
recipes.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/recipes');
    }).catch(err => {
        console.error('Error deleting recipe:', err);
        res.status(500).send('Error deleting recipe');
    });
});

// PUT/UPDATE
recipes.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedRecipe => {
        res.redirect('/recipes/' + req.params.id);
    }).catch(err => {
        console.error('Error updating recipe:', err);
        res.status(500).send('Error updating recipe');
    });
});

// EDIT
recipes.get('/:id/edit', (req, res) => {
    Recipe.findById(req.params.id).then(foundRecipe => {
        res.render('edit', { recipe: foundRecipe });
    });
});

// SHOW
recipes.get('/:id', (req, res) => {
    Recipe.findById(req.params.id).then(foundRecipe => {
        res.render('show', { recipe: foundRecipe });
    }).catch(err => {
        res.status(404).send('Recipe not found');
    });
});

module.exports = recipes;
