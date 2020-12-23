import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { generateRecipes } from '../../api/recipePuppy'
import UiCardRecipePuppy from './../shared/UiCardRecipePuppy'

const American = (props) => {
  const [recipes, setRecipes] = useState(null)
  const { msgAlert } = props
  useEffect(() => {
    let count = 0
    generateRecipes('american')
      .then(res => {
        setRecipes(res.data.results)
        count = res.data.results.length
      })
      .then(() => msgAlert({
        heading: 'Collected American Cuisine',
        message: `Successfully Retrieved ${count} American Cuisine Recipes`,
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Index Fail',
        message: 'Failed to index',
        variant: 'danger'
      }))
  }, [])
  let options = null
  if (!recipes) {
    options = <h2>Loading...</h2>
  } else if (recipes.length === 0) {
    options = <div><h2>No Recipes to Display</h2> <Link to="/recipe-create">Make a New Recipe</Link></div>
  } else {
    options = recipes.map(recipe => (
      <UiCardRecipePuppy
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
          {options}
        </div>
      </div>
    </Fragment>
  )
}

export default American
