const React = require('react')
const Default = require('./layouts/default')

function Index({recipes, title}) {
    return (
      <Default title={title}>
        
        <h2>Index Page</h2>
        <h3>Recipes</h3>
        <ul>
            {
                recipes.map((recipe, index) => {
                    return(
                        <li key={index}>
                            <a href={`/recipes/${recipe._id}`}>
                            {recipe.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        <div className="addButton">
            <a href="/recipes/add"><button>Add a new recipe</button></a>
        </div>

      </Default>
    )
}

module.exports = Index