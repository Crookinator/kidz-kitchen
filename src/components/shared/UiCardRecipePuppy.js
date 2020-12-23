import React from 'react'
import { Card } from 'react-bootstrap'

const UiCardRecipePuppy = ({ item }) => {
  return (
    <div>
      <Card
        style={{ width: '50rem' }}
        className="card">
        <Card.Body>
          <Card.Title><h2>{item.title}</h2></Card.Title>
          <Card.Text>Ingredients: {item.ingredients}</Card.Text>
          <Card.Text>See the full recipe on its host website <a href={item.href} target='_blank' rel='noopener noreferrer'>here</a></Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UiCardRecipePuppy
