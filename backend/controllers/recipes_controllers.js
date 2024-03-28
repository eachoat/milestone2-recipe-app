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

//Update

router.put('/:id', async (req, res) => {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRecipe) {
        return res.status(404).send('Recipe not found.');
      }
      // Assuming you want to return the updated recipe to the client
      res.json(updatedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating the recipe.');
    }
  });
  
module.exports = router;
