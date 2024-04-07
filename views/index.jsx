import React from 'react';
import { Default } from './layouts/Default';


function Index({ recipes }) {
    return (
        <Default>
            <h2>Home</h2>
            <ul className="card-list">
                {recipes && recipes.map((recipe) => (
                    <li key={recipe.id} className="card">
                        <img src={recipe.image} className='card-img-top' alt={recipe.title}/>
                        <a href={`/recipes/${recipe.id}`}>
                            {recipe.title}
                        </a>
                    </li>
                ))}
            </ul>
            <a href={`/recipes/new`}>
                <button>Add a new Recipe</button>
            </a>
        </Default>
    );
}

export default Index;
