import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UiCard = ({ item }) => {
  return (
    <Card
      className="card">
      <Card.Body>
        <Card.Title><Link to ={`/recipe/${item.id}`}>{item.title}</Link></Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UiCard
