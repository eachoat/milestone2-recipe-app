import React from 'react'
import { Default } from './layouts/Default';


function formatDate(date) {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

function Show({ recipe }) {
    const { title, category, prepTime, createdAt, image, ingredients, instructions, id } = recipe;
    const formattedDate = formatDate(createdAt);

    return (
        <Default>
            <h2>{title}</h2>
            <h4>For: {category}</h4>
            <h4>Prep Time: {prepTime}</h4>
            <h4>Created on: {formattedDate}</h4>
            <img src={image} alt={title} />
            <h5>{ingredients}</h5>
            <h5>{instructions}</h5>

            <br />

            <a href='/recipes'>
                <button>Return</button>
            </a>
            <form action={`/recipes/${id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <a href={`/recipes/${id}/edit`}>
                <button>Edit</button>
            </a>
        </Default>
    )
}

export default Show
