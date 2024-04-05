const mongoose = require('mongoose');

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
  
  createdAt: {
    type: Date,
    default: Date.now, // Default to the current date
  },
});

// Custom validator function for the ingredients array
function arrayLimit(val) {
  return val.length > 0;
}

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; 
