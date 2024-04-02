const React = require('react')
const Default = require('./layouts/default')

function Show ({recipe, index}) {
    //confirm we are getting our bread data in the terminal
    //console.log(bread.name)
  console.log(recipe.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{recipe.name}</h3>
        {/* <p>
            and it
            {
              bread.hasGluten 
              ? <span> does </span>
              : <span> does NOT </span>
            }
            have gluten.
        </p> */}

        <img src={recipe.image} alt={recipe.name} />

        {/* <p>{bread.getBakedBy()}</p> */}

        <a href={`/recipes/${recipe.id}/edit`}><button>Edit</button></a>

        <li><a href="/recipes">Go Home</a></li>

        <form action={`/recipes/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
        </form>

      </Default>
    )
}

module.exports = Show