const React = require('react')
const Default = require('./layouts/Default')

function New ({ recipes }) {
    return (
      <Default>
        <h2>Add a new recipe
        <div className="backButton">
  <a href="/recipes"><button>Go back to the index</button></a>
</div>

        </h2>
        <form action="/recipes" method="POST">
  <label htmlFor="name">Name</label>
  <input
  type="text"
  name="name"
  id="name"
  required 
  />
   <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
           
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = New
