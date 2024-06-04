"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Recipe_1 = __importDefault(require("../Recipe"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
function seedRecipes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.MONGODB_URI);
            yield Recipe_1.default.deleteMany({});
            const seededRecipes = yield Recipe_1.default.insertMany(recipeData);
            console.log('Recipes seeded successfully', seededRecipes);
        }
        catch (error) {
            console.error('Error seeding recipes:', error);
        }
        finally {
            mongoose_1.default.connection.close(() => {
                console.log('MongoDB connection closed');
                process.exit(0);
            });
        }
    });
}
seedRecipes();
