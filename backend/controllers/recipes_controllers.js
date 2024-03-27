const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// GET all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find(); 
    res.json(recipes);
});

// POST a new recipe
router.post('/', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).send(newRecipe); 
});

module.exports = router;
