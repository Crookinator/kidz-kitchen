import React from 'react'
import { Card } from 'react-bootstrap'

const Search = ({ props }) => {
  return (
    <div>
      <div>
        <h1>Recipe Catagories</h1>
        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>For Kids</Card.Title>
            <Card.Link href='#kids'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>American</Card.Title>
            <Card.Link href='#american'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>British</Card.Title>
            <Card.Link href='#british'>Generate Recipe</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>French</Card.Title>
            <Card.Link href='#french'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>Italian</Card.Title>
            <Card.Link href='#italian'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '18rem' }}
          className="card">
          <Card.Img variant="top" src='' />
          <Card.Body>
            <Card.Title>Mexican</Card.Title>
            <Card.Link href='#mexican'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Search
