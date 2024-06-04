"use strict";
const React = require('react');
const Default = require('./layouts/default');
function Index({ recipe }) {
    return (<Default>
            <h2>Home</h2>
            <ul>
                <div className="card">
                    {recipe && recipe.map((recipe, index) => (<li key={index}>
                            <img src={recipe.image} className='card-img-top' alt={recipe.title}></img>
                            <a href={`/recipes/${recipe.id}`}>
                                {recipe.title}
                            </a>
                        </li>))}
                </div>
            </ul>
            <a href={`/recipes/new`}><button>Add a new Recipe</button></a>
        </Default>);
}
//TODO: Check this page later
module.exports = Index;
