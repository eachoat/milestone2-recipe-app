import { Router, Request, Response } from 'express';
import Recipe, { RecipeDocument } from '../models/recipes';

const recipes = Router();

// Index Page
recipes.get('/', (req: Request, res: Response) => {
    Recipe.find()
        .then((foundRecipe: RecipeDocument[]) => {
            res.render('index', {
                recipe: foundRecipe
            });
        })
        .catch((err: Error) => {
            console.error('Error fetching recipes:', err);
            res.status(500).send('Error fetching recipes');
        });
});

// NEW
recipes.get('/new', (req: Request, res: Response) => {
    Recipe.find()
        .then((foundRecipe: RecipeDocument[]) => {
            res.render('new', {
                recipes: foundRecipe
            });
        })
        .catch((err: Error) => {
            console.error('Error fetching recipes:', err);
            res.status(500).send('Error fetching recipes');
        });
});

recipes.delete('/:id', (req: Request, res: Response) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(303).redirect('/recipes');
        })
        .catch((err: Error) => {
            console.error('Error deleting recipe:', err);
            res.status(500).send('Error deleting recipe');
        });
});

recipes.put('/:id', (req: Request, res: Response) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedRecipe: RecipeDocument | null) => {
            if (!updatedRecipe) {
                return res.status(404).send('Recipe not found');
            }
            res.redirect('/recipes/' + req.params.id);
        })
        .catch((err: Error) => {
            console.error('Error updating recipe:', err);
            res.status(500).send('Error updating recipe');
        });
});

// EDIT
recipes.get('/:id/edit', (req: Request, res: Response) => {
    Recipe.findById(req.params.id)
        .then((foundRecipe: RecipeDocument | null) => {
            if (!foundRecipe) {
                return res.status(404).send('Recipe not found');
            }
            res.render('edit', {
                recipe: foundRecipe
            });
        })
        .catch((err: Error) => {
            console.error('Error fetching recipe:', err);
            res.status(500).send('Error fetching recipe');
        });
});

// SHOW
recipes.get('/:id', (req: Request, res: Response) => {
    Recipe.findById(req.params.id)
        .then((foundRecipe: RecipeDocument | null) => {
            if (!foundRecipe) {
                return res.status(404).send('Recipe not found');
            }
            res.render('show', {
                recipe: foundRecipe
            });
        })
        .catch((err: Error) => {
            console.error('Error fetching recipe:', err);
            res.status(500).send('Error fetching recipe');
        });
});

// CREATE
recipes.post('/', (req: Request, res: Response) => {
    const { title, prepTime, createdAt, image, category, ingredients, instructions } = req.body;

    const recipe = new Recipe({
        title,
        prepTime,
        createdAt,
        image,
        category,
        ingredients,
        instructions
    });

    recipe.save()
        .then((savedRecipe: RecipeDocument) => res.json(savedRecipe))
        .catch((err: Error) => {
            console.error('Error saving recipe:', err);
            res.status(500).send('Error saving recipe');
        });
});

export default recipes;