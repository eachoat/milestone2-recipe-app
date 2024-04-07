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

//EDIT
recipes.get('/:id/edit', (req,res) => {
    Recipe.findById(req.params.id)
        .then(foundRecipe => {
            res.render('edit', {
                recipe:foundRecipe
            })
        })
})

//SHOW
recipes.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(foundRecipe => {
            res.render('show', {
                recipe: foundRecipe
            })
        })
        .catch(err => {
            res.send('404')
        })
    })


//CREATE
recipes.post('/', (req, res) =>{
    const { title, prepTime, createdAt, image,category, ingredients, instructions } = req.body;

    const recipe = new Recipe({
        title,
        prepTime,
        createdAt,
        image,
        category,
        ingredients,
        instructions
    });

    recipe.save()
        .then(() => res.json(recipe))
        .catch(err => {
            console.error('Error saving recipe to database:', err);
            res.status(500).send('Error saving recipe to database');
        });
})

module.exports = recipes;
