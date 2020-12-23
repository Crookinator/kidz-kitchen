import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { indexRecipes } from '../../api/recipe'
import UiCard from './../shared/UiCard'

const RecipeIndex = (props) => {
  const [recipes, setRecipes] = useState(null)
  const { user, msgAlert } = props
  useEffect(() => {
    indexRecipes(user)
      .then(res => setRecipes(res.data.recipes))
      .catch(() => msgAlert({
        heading: 'Index Fail',
        message: 'Failed to index',
        variant: 'danger'
      }))
  }, [])
  let index
  if (!recipes) {
    index = <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  } else if (recipes.length === 0) {
    index = <div><h2>No Recipes to Display</h2> <Link to="/recipe-create">Make a New Recipe</Link></div>
  } else {
    index = recipes.map(recipe => (
      <UiCard
        key={recipe.title}
        item={recipe}
      />
    ))
  }
  return (
    <Fragment>
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h1>Recipes</h1>
          {index}
        </div>
      </div>
    </Fragment>
  )
}

export default RecipeIndex
