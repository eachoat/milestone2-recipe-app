// Dependencies
const express = require('express');
const recipe = express.Router(); // Changed variable name from router to recipe
const Baker = require('../models/baker.js');
const bakerSeedData = require('../models/baker_seed.js');

// Seed Data Route
recipe.get('/data/seed', async (req, res) => {
    try {
        await Baker.insertMany(bakerSeedData);
        res.redirect('/breads');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Index Route
recipe.get('/', async (req, res) => {
    try {
        const foundBakers = await Baker.find().populate('breads');
        res.send(foundBakers);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Show Route
recipe.get('/:id', async (req, res) => {
    try {
        const foundBaker = await Baker.findById(req.params.id).populate('breads');
        if (foundBaker) {
            res.render('bakerShow', { baker: foundBaker });
        } else {
            res.status(404).send('Baker not found');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete Route
recipe.delete('/:id', async (req, res) => {
    try {
        await Baker.findByIdAndDelete(req.params.id);
        res.status(303).redirect('/breads');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = recipe;