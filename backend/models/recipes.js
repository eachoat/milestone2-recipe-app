"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Custom validator function for the ingredients array
function arrayLimit(val) {
    return val.length > 0;
}
const recipeSchema = new mongoose_1.Schema({
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
const Recipe = mongoose_1.default.model('Recipe', recipeSchema);
exports.default = Recipe;
