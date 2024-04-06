const mongoose = require('mongoose')

const { Schema } = mongoose;

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true},
    image: {type: String, default: 'http://placehold.it/500x500.png'},
    ingredients: {type: [String], required: true,},
    instructions: { type: String, required: true}
}) //prep time and category

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe