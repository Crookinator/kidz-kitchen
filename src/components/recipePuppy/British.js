import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import { generateRecipes } from '../../api/recipePuppy'
import UiCardRecipePuppy from './../shared/UiCardRecipePuppy'

const British = (props) => {
  const [recipes, setRecipes] = useState(null)
  const { msgAlert } = props
  useEffect(() => {
    let count = 0
    generateRecipes('british')
      .then(res => {
        setRecipes(res.data.results)
        count = res.data.results.length
      })
      .then(() => msgAlert({
        heading: 'Collected British Cuisine',
        message: `Successfully Retrieved ${count} British Cuisine Recipes`,
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
    options = <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
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

export default British
