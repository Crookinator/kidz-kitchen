import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { showRecipe, deleteRecipe } from '../../api/recipe'
import Button from 'react-bootstrap/Button'
import { Card } from 'react-bootstrap'

const RecipeShow = (props) => {
  const [recipe, setRecipe] = useState(null)
  const [update, setUpdate] = useState(false)
  const { user, msgAlert, match, history } = props
  useEffect(() => {
    showRecipe(user, match.params.recipeId)
      .then(res => {
        setRecipe(res.data.recipe)
      })
      .then(() => {
        msgAlert({
          heading: 'Show Recipe Success',
          message: 'Here is your Recipe',
          variant: 'success'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Task Failed',
          message: 'Error code: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  const handleDelete = () => {
    deleteRecipe(user, match.params.recipeId)
      .then(() => {
        msgAlert({
          heading: 'Recipe Deleted',
          message: 'back to the list of Recipes that exist',
          variant: 'success'
        })
      })
      .then(() => history.push('/recipes'))
      .catch(err => {
        msgAlert({
          heading: 'Deletion Failed',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  const handleUpdate = () => {
    setUpdate(true)
  }

  if (update) {
    return <Redirect to={'/recipe-update/' + recipe.id} />
  }

  if (recipe === null) {
    return (<div><p>Loading...</p></div>)
  }
  return (
    <div className="row">
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h1>Recipe</h1>
        <Card>
          <Card.Body>
            <Card.Title>{recipe.title} ({recipe.cuisine})</Card.Title>
            <Card.Text>{recipe.description}</Card.Text>
            <Card.Title>Instructions:</Card.Title>
            <Card.Text>{recipe.instructions}</Card.Text>
            <Card.Title>Ingredients:</Card.Title>
            <Card.Text>{recipe.ingredients}</Card.Text>
            <Button className="form-submit-button update" onClick={handleUpdate}>Update</Button>
            <Button className="form-submit-button delete" onClick={handleDelete}>Delete</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default withRouter(RecipeShow)
