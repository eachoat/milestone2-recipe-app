<<<<<<< HEAD
// Require Express and set up the router
const express = require('express');
const RecipesRoute = express.Router();

// Fixed variable name to follow JavaScript naming conventions
const seedRecipes = require('../seeders/seedRecipes');

// Require the Recipes model
const Recipes = require('../models/Recipes');

// GET all Recipes
RecipesRoute.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.find({});
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Recipes', error: err });
    }
});

// Seed Recipes
RecipesRoute.post('/seed', async (req, res) => {
    try {
        const seededRecipes = await seedRecipes();
        res.status(200).json({
            message: 'Recipes seeded successfully',
            data: seededRecipes
        });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding Recipes', error: error.message });
    }
});

// GET a single recipe by ID
RecipesRoute.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id);
        if (recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (err) {
        if (err.name === 'CastError') {
            res.status(400).json({ message: 'Invalid ID format', error: err });
        } else {
            res.status(500).json({ message: 'Error fetching recipe', error: err });
        }
    }
});

// POST a new recipe
RecipesRoute.post('/', async (req, res) => {
    try {
        const newRecipe = await Recipes.create(req.body);
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(500).json({ message: 'Error creating recipe', error: err });
    }
});

// PATCH to update a recipe by ID
RecipesRoute.patch('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedRecipe) {
            res.json(updatedRecipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating recipe', error: err });
    }
});

// DELETE a recipe by ID
RecipesRoute.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipes.findByIdAndDelete(req.params.id);
        if (deletedRecipe) {
            res.json({ message: 'Recipe successfully deleted' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting recipe', error: err });
    }
});

// Export the router
module.exports = RecipesRoute;
=======
const express = require('express')
const recipes = express.Router()
const Recipe = require('../models/recipes.js')

//Index Page
recipes.get('/', (req, res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('index', {
                recipe: foundRecipe
            })
        })
})

//NEW
recipes.get('/new', (req, res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('new', {
                recipes:foundRecipe
            })
        })
}) //TODO: DOUBLE CHECK THIS ROUTE LATER

recipes.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(deletedRecipe =>{
            res.status(303).redirect('/recipes')
    })
})

recipes.put('/:id', (req,res) =>{
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updateRecipe => {
            if (!updateRecipe) {
                return res.status(404).send('Recipe not found');
            }
            res.redirect('/recipes/' + req.params.id);
        })
        .catch(err => {
            console.error('Error updating recipe:', err);
            res.status(500).send('Error updating recipe');
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
    const { title, image, ingredients, instructions } = req.body;

    const recipe = new Recipe({
        title,
        image,
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

module.exports = recipes
>>>>>>> andyNew
