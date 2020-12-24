import React from 'react'
import { Card } from 'react-bootstrap'

const Search = ({ props }) => {
  return (
    <React.Fragment>
      <h1>Recipes by Cuisine</h1>
      <div>
        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>For Kids</h3></Card.Title>
            <Card.Link href='#kids'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>American</h3></Card.Title>
            <Card.Link href='#american'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>British</h3></Card.Title>
            <Card.Link href='#british'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>French</h3></Card.Title>
            <Card.Link href='#french'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>Italian</h3></Card.Title>
            <Card.Link href='#italian'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>

        <Card
          style={{ width: '25rem' }}
          className="card">
          <Card.Body>
            <Card.Title><h3>Mexican</h3></Card.Title>
            <Card.Link href='#mexican'>Generate Recipes</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Search
