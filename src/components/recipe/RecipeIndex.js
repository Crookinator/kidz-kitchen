import React, { useState, useEffect, Fragment } from 'react'
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
  if (!recipes) {
    return <p>Loading...</p>
  }

  const index = recipes.map(recipe => (
    <UiCard
      key={recipe.title}
      item={recipe}
    />
  ))
  return (
    <Fragment>
      <div className='recipesDisplay'>
        <h2>Recipes</h2>
        {index}
      </div>
    </Fragment>
  )
}

export default RecipeIndex
