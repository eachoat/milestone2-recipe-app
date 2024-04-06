const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
// Assuming seedRecipes is a function exported from the seeder file that seeds the database
const seedRecipes = require('../models/seeder/seed-recipes');

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the recipes.');
    }
});

// Route to seed recipes
router.post('/seed', async (req, res) => {
    try {
        const seededRecipes = await seedRecipes(); // Call the seed function
        res.status(200).json({
            message: 'Recipes seeded successfully',
            data: seededRecipes
        });
    } catch (error) {
        res.status(500).json({ message: 'Error seeding recipes', error: error.message });
    }
});

// POST a new recipe
router.post('/', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the recipe.');
    }
});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found.');
        }
        res.json(updatedRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while updating the recipe.');
    }
});

// Search for recipes by ingredient
router.get('/search', async (req, res) => {
    try {
        const { ingredient } = req.query;
        const recipes = await Recipe.find({ "ingredients": { "$regex": ingredient, "$options": "i" } });
        res.json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error searching for recipes.');
    }
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).send('Recipe not found.');
        }
        res.status(200).json({ message: 'Recipe successfully deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the recipe.');
    }
});

module.exports = router;
