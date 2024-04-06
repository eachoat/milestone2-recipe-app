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
                <input type='submit'/>
            </form>
            <div className='backButton'>
                <a href='/recipes'><button>Return</button></a>
            </div>
        </Default>
    )
}

module.exports = New;