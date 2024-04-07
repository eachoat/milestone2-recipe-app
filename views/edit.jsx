import React, { useState } from 'react';
import { Default } from './layouts/Default';

function Edit({ recipe }) {
    const [formData, setFormData] = useState({
        title: recipe.title,
        prepTime: recipe.prepTime,
        category: recipe.category,
        image: recipe.image,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/recipes/${recipe.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
           
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <Default>
            <h2>Edit The Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Name</label>
                <input 
                    type="text" 
                    name="title"
                    id="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="prepTime">Prep Time</label>
                <input 
                    type="number"
                    name="prepTime"
                    id="prepTime"
                    required
                    value={formData.prepTime}
                    onChange={handleChange}
                />
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category" 
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <label htmlFor='ingredients'>Ingredients</label>
                <textarea
                    name='ingredients'
                    id='ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}
                ></textarea>
                <label htmlFor='instructions'>Instructions</label>
                <textarea
                    name='instructions'
                    id='instructions'
                    value={formData.instructions}
                    onChange={handleChange}
                ></textarea>
                <br />
                <button type="submit">Save Changes</button>
            </form>
        </Default>
    );
}

export default Edit;
