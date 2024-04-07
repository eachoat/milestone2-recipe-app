const express = require('express');
const Recipe = require('../models/recipes');

// Create the router for recipes
const recipesRouter = express.Router();

// GET all recipes - API endpoint
recipesRouter.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.error('Error fetching recipes:', err);
        res.status(500).json({ error: 'Error fetching recipes' });
    }
});

// //Seed Route
// recipesRouter.get('/seed', async (req, res) => {
//     // Array of sample recipes to add to the database
//     const sampleRecipes = [
//         {
//             title: "Sample Recipe 1",
//             prepTime: 30,
//             createdAt: new Date(),
//             image: "https://via.placeholder.com/150",
//             category: "Dessert",
//             ingredients: ["Ingredient 1", "Ingredient 2"],
//             instructions: "Instructions for Sample Recipe 1."
//         },
//         {
//             title: "Sample Recipe 2",
//             prepTime: 45,
//             createdAt: new Date(),
//             image: "https://via.placeholder.com/150",
//             category: "Main Course",
//             ingredients: ["Ingredient 3", "Ingredient 4"],
//             instructions: "Instructions for Sample Recipe 2."
//         }
        
//     ];

   
//     try {
//         await Recipe.deleteMany({}); // Optional: clear the collection first
//         const seededRecipes = await Recipe.insertMany(sampleRecipes);
//         res.send(seededRecipes);
//     } catch (err) {
//         console.error('Error seeding database:', err);
//         res.status(500).send('Error seeding database');
//     }
// });

// GET a single recipe by id - API endpoint
recipesRouter.get('/api/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (err) {
        console.error('Error fetching recipe:', err);
        res.status(500).json({ error: 'Error fetching recipe' });
    }
});

// POST a new recipe - API endpoint
recipesRouter.post('/api/recipes', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        console.error('Error saving recipe:', err);
        res.status(500).json({ error: 'Error saving recipe' });
    }
});

// PUT to update a recipe by id - API endpoint
recipesRouter.put('/api/recipes/:id', async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.json(updatedRecipe);
    } catch (err) {
        console.error('Error updating recipe:', err);
        res.status(500).json({ error: 'Error updating recipe' });
    }
});

// DELETE a recipe by id - API endpoint
recipesRouter.delete('/api/recipes/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe successfully deleted' });
    } catch (err) {
        console.error('Error deleting recipe:', err);
        res.status(500).json({ error: 'Error deleting recipe' });
    }
});



module.exports = recipesRouter;
