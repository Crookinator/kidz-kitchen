import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import RecipeForm from '../shared/RecipeForm'

import { createRecipe } from '../../api/recipe'

const RecipeCreate = props => {
  const [recipe, setRecipe] = useState({ title: '', description: '', ingredients: '', instructions: '', cuisine: '' })
  const [createdRecipeId, setCreatedRecipeId] = useState(null)

  const { user, match } = props

  const handleChange = event => {
    event.persist()
    setRecipe(prevRecipe => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedRecipe = Object.assign({}, prevRecipe, updatedField)

      return editedRecipe
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = props

    createRecipe(user, recipe)
      .then(res => setCreatedRecipeId(res.data.recipe.id))
      .then(() => msgAlert({
        heading: 'Create Success',
        message: 'Recipe created successfully',
        variant: 'success'
      }))
      .catch(() => msgAlert({
        heading: 'Create Fail',
        message: 'Failed to create',
        variant: 'danger'
      }))
  }

  if (createdRecipeId) {
    return <Redirect to={`/recipe/${createdRecipeId}`} />
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <div className='darkForm'>
          <h3>Add a Recipe</h3>
          <RecipeForm
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

export default RecipeCreate
