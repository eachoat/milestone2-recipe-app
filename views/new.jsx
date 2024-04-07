import React from 'react';
import { Default } from './layouts/Default';


function New() {
    return (
        <Default>
            <h2>Add A New Recipe</h2>
            <form action="/recipes" method="POST" enctype="multipart/form-data">
                <label htmlFor="title">Name</label>
                <input type="text" name="title" id="title" placeholder="Name...." required />
                <label htmlFor="prepTime">Prep Time</label>
                <input type="number" name="prepTime" id="prepTime" required />
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <label htmlFor="image">Image</label>
                <input type="file" name="image" id="image" accept="image/*" required />
                <label htmlFor="ingredients">Ingredients</label>
                <textarea name="ingredients" id="ingredients" placeholder="Ingredients..." required></textarea>
                <label htmlFor="instructions">Instructions</label>
                <textarea name="instructions" id="instructions" placeholder="List Instructions..." required></textarea>
                <br />
                <input type="submit" />
            </form>
            <div className="backButton">
                <a href="/recipes" className="button">Return</a>
            </div>
        </Default>
    );
}

export default New;
