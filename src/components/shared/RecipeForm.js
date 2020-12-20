import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const RecipeForm = ({ recipe, user, handleSubmit, handleChange, match }) => {
  return (
    <form onSubmit={handleSubmit}>
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
          type='text'
          placeholder="Describe Your Recipe"
          value={recipe.description}
          name="description"
          onChange={handleChange}
        />

        <Form.Label>Ingredients</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder="Enter Needed Ingredients"
          value={recipe.ingredients}
          name="ingredients"
          onChange={handleChange}
        />

        <Form.Label>Instructions</Form.Label>
        <Form.Control
          required
          type='text'
          placeholder="What are the Instructions"
          value={recipe.instructions}
          name="instructions"
          onChange={handleChange}
        />

        <Form.Label>Cuisine</Form.Label>
        <Form.Control
          as='select'
          onChange={handleChange}
          name="cuisine"
        >
          <option selected disabled>Choose Cuisine</option>
          <option value='american'>American</option>
          <option value='asian'>Asian</option>
          <option value='french'>French</option>
          <option value='german'>German</option>
          <option value='italian'>Italian</option>
          <option value='mexican'>Mexican</option>
          <option value='spanish'>Spanish</option>
        </Form.Control>
      </Form.Group>
      <Button
        className="form-submit-button"
        variant="primary"
        type="submit"
      >
      Submit
      </Button>
    </form>
  )
}
export default RecipeForm
