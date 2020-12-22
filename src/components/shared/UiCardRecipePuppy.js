import React from 'react'
import { Card } from 'react-bootstrap'

const UiCardRecipePuppy = ({ item }) => {
  return (
    <Card
      className="card">
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.ingredients}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UiCardRecipePuppy
