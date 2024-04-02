const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

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

router.get('/search', async (req, res) => {
    try {
      const { ingredient } = req.query; // Example: /search?ingredient=flour
      const recipes = await Recipe.find({ ingredients: ingredient });
      res.json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching the recipes.');
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
