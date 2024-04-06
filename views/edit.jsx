const React = require('react')
const Default = require('./layouts/default')



function Edit ({recipe, index}){
    return(
        <Default>
            <h2>Edit The Recipe</h2>
            <form action={`/recipes/${recipe.id}?_method=PUT`} method='POST'>
                <input 
                type="text" 
                name = "title"
                id = "title"
                required
                defaultValue = {recipe.title}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={recipe.image}
                />
                <label htmlFor='ingredients'>Ingredients</label>
                <input 
                    type="text"
                    name='ingredients'
                    id='ingredients'
                    defaultValue={recipe.ingredients}
                />
                <label htmlFor='instructions'>Instructions</label>
                <input 
                    type="text" 
                    name='instructions'
                    id='instructions'
                    defaultValue={recipe.instructions}
                />
                <br />
                <input type="submit"/>
            </form>
        </Default>
    )
}

module.exports = Edit;