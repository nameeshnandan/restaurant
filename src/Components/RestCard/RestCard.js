import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({ restaurents }) {
  console.log(restaurents);
  return (
    <>
      <Link to={`/view/${restaurents.id}`}>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={restaurents.photograph} />
          <Card.Body>
            <Card.Title>{restaurents.name}</Card.Title>
            <Card.Text>
              {restaurents.address}
              {restaurents.cuisine_type}
              {restaurents.neighborhood}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default RestCard

