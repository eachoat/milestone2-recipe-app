import mongoose, { Document, Schema } from 'mongoose';

// Custom validator function for the ingredients array
function arrayLimit(this: any, val: string[]) {
  return val.length > 0;
}

interface RecipeDocument extends Document {
  title: string;
  ingredients: string[];
  instructions: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert';
  prepTime: number;
  createdAt: Date;
  image?: string;
}

const recipeSchema = new Schema<RecipeDocument>({
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
  image: {
    type: String,
    default: 'http://placehold.it/500x500.png',
  },
});

const Recipe = mongoose.model<RecipeDocument>('Recipe', recipeSchema);

export default Recipe;
