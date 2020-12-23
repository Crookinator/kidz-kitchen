import React from 'react'
import { Card } from 'react-bootstrap'

const UiCardRecipePuppy = ({ item }) => {
  return (
    <div className='row'>
      <div className='col-lg-10 display '>
        <Card
          style={{ width: '20rem', height: '30rem' }}
          className="card">
          <Card.Img style={{ width: '5rem', height: '5rem' }} variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title><h2>{item.title}</h2></Card.Title>
            <Card.Text>Ingredients: {item.ingredients}</Card.Text>
            <Card.Text>See the full recipe on its host website <a href={item.href} target='_blank' rel='noopener noreferrer'>here</a></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default UiCardRecipePuppy
