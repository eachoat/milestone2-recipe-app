import React from 'react'
import Default from './layouts/default'

interface RecipeProps {
    recipe: {
        title: string;
        category: string;
        prepTime: number;
        createdAt: Date;
        image: string;
        ingredients: string;
        instructions: string;
        id: string;
    };
}

const Show: React.FC<RecipeProps> = ({ recipe }) => {
    const formattedDate = `${recipe.createdAt.getMonth() + 1}/${recipe.createdAt.getDate()}/${recipe.createdAt.getFullYear()}`;

    const handleDelete = () => {
        // Handle delete functionality
    };

    return (
        <Default>
            <h2>{recipe.title}</h2>
            <h4>For: {recipe.category}</h4>
            <h4>PrepTime: {recipe.prepTime}</h4>
            <h4>Created on: {formattedDate}</h4>
            <img src={recipe.image} alt={recipe.title} />
            <h5>{recipe.ingredients}</h5>
            <h5>{recipe.instructions}</h5>

            <br />

            <button onClick={handleDelete}>DELETE</button>
            <a href='/recipes'><button>Return</button></a>
            <a href={`/recipes/${recipe.id}/edit`}><button>Edit</button></a>
        </Default>
    );
};

export default Show