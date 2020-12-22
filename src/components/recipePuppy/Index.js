import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { generateRecipes } from '../../api/recipePuppy'
import UiCardRecipePuppy from './../shared/UiCardRecipePuppy'

const Index = (props) => {
  const [recipes, setRecipes] = useState(null)
  const { msgAlert } = props
  useEffect(() => {
    generateRecipes('kids')
      .then(res => {
        setRecipes(res.data.results)
      })
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

export default Index
