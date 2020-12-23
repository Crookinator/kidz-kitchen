import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RecipeFormNoDropdown = ({ recipe, user, handleSubmit, handleChange, match }) => {
  return (
    <form>
      <Form.Group controlId='recipe'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder="Enter Recipe Title"
          value={recipe.title}
          name="title"
          onChange={handleChange}
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="Describe Your Recipe"
          value={recipe.description}
          name="description"
          onChange={handleChange}
        />

        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="Enter Needed Ingredients"
          value={recipe.ingredients}
          name="ingredients"
          onChange={handleChange}
        />

        <Form.Label>Instructions</Form.Label>
        <Form.Control
          required
          type='textarea'
          placeholder="What are the Instructions"
          value={recipe.instructions}
          name="instructions"
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className="form-submit-button"
        variant="dark"
        onClick={ handleSubmit }
      >
      Submit
      </Button>
    </form>
  )
}
export default RecipeFormNoDropdown
