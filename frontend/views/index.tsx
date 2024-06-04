import React from 'react'
import Default from './layouts/default'

interface Recipe {
    id: string;
    title: string;
    image: string;
}

interface IndexProps {
    recipe: Recipe[];
}

const Index: React.FC<IndexProps> = ({ recipe }) => {
    return (
        <Default>
            <h2>Home</h2>
            <ul>
                {recipe && recipe.map((recipeItem, index) => (
                    <li key={index}>
                        <div className="card">
                            <img src={recipeItem.image} className='card-img-top' alt={recipeItem.title} />
                            <a href={`/recipes/${recipeItem.id}`}>
                                {recipeItem.title}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
            <a href="/recipes/new"><button>Add a new Recipe</button></a>
        </Default>
    );
};

export default Index