"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recipes_1 = __importDefault(require("../models/recipes"));
const recipes = (0, express_1.Router)();
// Index Page
recipes.get('/', (req, res) => {
    recipes_1.default.find()
        .then((foundRecipe) => {
        res.render('index', {
            recipe: foundRecipe
        });
    })
        .catch((err) => {
        console.error('Error fetching recipes:', err);
        res.status(500).send('Error fetching recipes');
    });
});
// NEW
recipes.get('/new', (req, res) => {
    recipes_1.default.find()
        .then((foundRecipe) => {
        res.render('new', {
            recipes: foundRecipe
        });
    })
        .catch((err) => {
        console.error('Error fetching recipes:', err);
        res.status(500).send('Error fetching recipes');
    });
});
recipes.delete('/:id', (req, res) => {
    recipes_1.default.findByIdAndDelete(req.params.id)
        .then(() => {
        res.status(303).redirect('/recipes');
    })
        .catch((err) => {
        console.error('Error deleting recipe:', err);
        res.status(500).send('Error deleting recipe');
    });
});
recipes.put('/:id', (req, res) => {
    recipes_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedRecipe) => {
        if (!updatedRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.redirect('/recipes/' + req.params.id);
    })
        .catch((err) => {
        console.error('Error updating recipe:', err);
        res.status(500).send('Error updating recipe');
    });
});
// EDIT
recipes.get('/:id/edit', (req, res) => {
    recipes_1.default.findById(req.params.id)
        .then((foundRecipe) => {
        if (!foundRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.render('edit', {
            recipe: foundRecipe
        });
    })
        .catch((err) => {
        console.error('Error fetching recipe:', err);
        res.status(500).send('Error fetching recipe');
    });
});
// SHOW
recipes.get('/:id', (req, res) => {
    recipes_1.default.findById(req.params.id)
        .then((foundRecipe) => {
        if (!foundRecipe) {
            return res.status(404).send('Recipe not found');
        }
        res.render('show', {
            recipe: foundRecipe
        });
    })
        .catch((err) => {
        console.error('Error fetching recipe:', err);
        res.status(500).send('Error fetching recipe');
    });
});
// CREATE
recipes.post('/', (req, res) => {
    const { title, prepTime, createdAt, image, category, ingredients, instructions } = req.body;
    const recipe = new recipes_1.default({
        title,
        prepTime,
        createdAt,
        image,
        category,
        ingredients,
        instructions
    });
    recipe.save()
        .then((savedRecipe) => res.json(savedRecipe))
        .catch((err) => {
        console.error('Error saving recipe:', err);
        res.status(500).send('Error saving recipe');
    });
});
exports.default = recipes;
