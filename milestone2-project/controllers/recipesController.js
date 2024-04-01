const express = require('express')
const recipeRoutes = express.Router();
const Recipe = require('../models/recipes')

recipeRoutes.get('/', (req, res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('index', {
                breads: foundRecipe,
                title: 'Index Page'
            })
        })
})

recipeRoutes.get('/add', (req,res) => {
    Recipe.find()
        .then(foundRecipe => {
            res.render('add', {
                recipetest: foundRecipe
            })
        })
})
