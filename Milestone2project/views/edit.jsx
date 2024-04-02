const React = require('react')
const Default = require('./layouts/default')

function Edit ({recipes}) {
    return(
        <Default>
            <h2>Edit a Recipe</h2>
            <form action={`/recipes/${recipe.id}?_method=PUT`} method="POST">
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                required
                defaultValue={recipe.name}
                />
                <label htmlFor="image">Image</label>
                <input
                type="text"
                name="image"
                id="image"
                defaultValue={recipe.image}
                 />
                <label htmlFor="recipe">recipe</label>
                    <select name="recipe" id="recipe" defaultValue={recipe.baker}>
                      {recipes.map((recipe) => {
                        return(
                            <option value={recipe.id} key={recipe.id}>{recipe.name}</option>
                        )
                      })}
                      </select>

                
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit