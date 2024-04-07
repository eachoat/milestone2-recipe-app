const React = require('react')
const Default = require('./layouts/default')

function Show ({recipe, index}) {
    const formattedDate = `${recipe.createdAt.getMonth() + 1}/${recipe.createdAt.getDate()}/${recipe.createdAt.getFullYear()}`;

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

            <a href='/recipes'><button>Return</button></a>
            <form action={`/recipes/${recipe.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
            </form>
            <a href={`/recipes/${recipe.id}/edit`}><button>Edit</button></a>
        </Default>
    )
}

module.exports = Show