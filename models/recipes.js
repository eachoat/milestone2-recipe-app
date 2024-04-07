
const mongoose = require('mongoose');

// Define a custom validator function that ensures an array contains at least one element
function arrayLimit(val) {
  
  return val.length > 0;
}

// Define a schema for the Recipe collection
const recipeSchema = new mongoose.Schema({
  // Define the 'title' field as a string which is required and should be trimmed
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
    // Enum specifies the allowed values for the category
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'],
    trim: true,
  },
  
  prepTime: {
    type: Number,
    required: true, 
 
    min: [0, 'Preparation time cannot be negative'], 
  },
  // Define the 'createdAt' field as a date with a default value set to the current date
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Define the 'image' field as a string with a default placeholder image URL
  image: {
    type: String,
    // Provide a default placeholder image
    default: 'http://placehold.it/500x500.png'
  },
});


const Recipe = mongoose.model('Recipe', recipeSchema);


module.exports = Recipe;
