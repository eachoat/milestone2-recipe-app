const mongoose = require('mongoose');

// Custom validator function for the ingredients array
function arrayLimit(val) {
  return val.length > 0;
}

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    trim: true, 
  },
  ingredients: {
    type: [String],
    required: true, 
    validate: [arrayLimit, 'Ingredients list cannot be empty'], 
  },
  instructions: {
    type: String,
    required: true, 
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'], // Example categories
    trim: true,
  },
  
  prepTime: {
    type: Number,
    required: true, 
    min: [0, 'Preparation time cannot be negative'], // Ensure non-negative values
  },
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current date
  },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
