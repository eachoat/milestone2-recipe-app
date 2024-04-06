const React = require('react')
const Default = require('./layouts/default')

function New ({}) {
    return(
        <Default>
            <h2>Add A New Recipe</h2>
            <form action="/recipes" method='POST'>
                <label htmlFor='title'>Name</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder='Name....'
                    required
                />
                <label htmlFor='prepTime'>Prep Time</label>
                <input 
                type="int"
                name='prepTime'
                id='prepTime'
                required
                />
                <label htmlFor="category">Category</label>
                <select name='category' id='category'>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    accept="image/*"
                    required
                />
                <label htmlFor='ingredients'>Ingredients</label>
                <input 
                    type="text"
                    name='ingredients'
                    id='ingredients'
                    placeholder='Ingredients...'
                    required
                />
                <label htmlFor='instructions'>Instructions</label>
                <input 
                    type="text"
                    name='instructions'
                    id='instructions'
                    placeholder='List Instructioins...'
                    required
                />
                    <br />
                <input href='/recipes' type='submit'/>
            </form>
            <div className='backButton'>
                <a href='/recipes'><button>Return</button></a>
            </div>
        </Default>
    )
}

module.exports = New;