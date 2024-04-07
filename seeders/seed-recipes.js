const mongoose = require('mongoose');
const Recipe = require('../Recipe'); 
require('dotenv').config();


const recipeData = [
  {
    title: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup sugar",
      "2 cups flour",
      "1/2 cup chocolate chips"
    ],
    instructions: "Mix all ingredients and bake at 350 degrees Fahrenheit for 12 minutes.",
    category: "Dessert",
    prepTime: 15, // Assuming prep time is in minutes
    createdAt: new Date(), // Set the current date and time
  },
  {
    title: "Spaghetti Carbonara",
    ingredients: [
      "1 lb spaghetti",
      "4 large eggs",
      "8 ounces pancetta"
    ],
    instructions: "Cook spaghetti. Mix eggs and pancetta, then combine with pasta.",
    category: "Main Course",
    prepTime: 20, // Assuming prep time is in minutes
    createdAt: new Date(), // Set the current date and time
  },
  
];

async function seedRecipes() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); 
    await Recipe.deleteMany({});
    const seededRecipes = await Recipe.insertMany(recipeData);
    console.log('Recipes seeded successfully', seededRecipes);
  } catch (error) {
    console.error('Error seeding recipes:', error);
  } finally {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0); 
    });
  }
}

seedRecipes(); 