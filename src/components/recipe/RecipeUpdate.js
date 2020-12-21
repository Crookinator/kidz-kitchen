import React, { useState, useEffect } from 'react'
import RecipeFormNoDropdown from '../shared/RecipeFormNoDropdown'
import { Redirect } from 'react-router-dom'

import { updateRecipe, showRecipe } from '../../api/recipe'

const RecipeUpdate = props => {
  const [recipe, setRecipe] = useState({ title: '', description: '', ingredients: '', instructions: '', cuisine: '' })
  const [updated, setUpdated] = useState(false)

  const { user, msgAlert, match } = props
  useEffect(() => {
    showRecipe(user, match.params.recipeId)
      .then(res => setRecipe(res.data.recipe))
      .then(() => msgAlert({
        heading: 'Recipe show success!',
        message: 'Check it out',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Recipe show failed',
        message: err.message,
        variant: 'danger'
      }))
  }, [])

  const handleChange = event => {
    event.persist()

    const updatedField = { [event.target.name]: event.target.value }
    setRecipe(oldRecipe => {
      const updatedRecipe = { ...oldRecipe, ...updatedField }
      return updatedRecipe
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateRecipe(user, recipe, match.params.recipeId)
      .then(() => setUpdated(true))
      .then(() => msgAlert({
        heading: 'Update successful',
        message: 'Recipe updated',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Update failed',
        message: err.message,
        variant: 'danger'
      }))
  }

  if (updated) {
    // redirect to the updated recipe
    return <Redirect to={`/recipe/${match.params.id}`} />
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className='darkForm'>
          <h1>Update your Recipe</h1>
          <RecipeFormNoDropdown
            recipe={recipe}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            match={match}
            user={user}
          />
        </div>
      </div>
    </div>
  )
}

export default RecipeUpdate
