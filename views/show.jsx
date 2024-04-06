const React = require('react')
const Default = require('./layouts/default')
import Footer from './footer'; 

function Show ({recipe, index}) {
    console.log(recipe.name)
    return (
        <Default>
            <div className="container">
                <h2>Show Page</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3>{recipe.name}</h3>
                        <p>Description: {recipe.description}</p>
                        <p>Preparation Time: {recipe.preparationTime} minutes</p>
                    </div>
                    <div className="col-md-6">
                        <img src={recipe.image} alt={recipe.name} className="img-fluid" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <a href={`/recipes/${recipe.id}/edit`} className="btn btn-primary mr-2">Edit</a>
                        <form action={`/recipes/${recipe.id}?_method=DELETE`} method="POST" style={{ display: 'inline-block' }}>
                            <input type='submit' value="DELETE" className="btn btn-danger" />
                        </form>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <a href="/recipes" className="btn btn-secondary">Go Home</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Default>
    )
}

module.exports = Show