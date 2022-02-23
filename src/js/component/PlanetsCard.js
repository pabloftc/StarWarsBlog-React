import React, { useContext } from 'react';
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { BsStar } from "react-icons/bs";

const PlanetsCard = () => {
  const {store, actions} = useContext(Context)
  return (
    <Container fluid>
      <Row className='scrollable-row'>
      {store.planets.map((planet, idx) => {
        return (
          <Card key={idx} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
          <Card.Body>
            <Card.Title>{planet.name}</Card.Title>
            <Card.Text>
             Some quick example text to build on the card title and make up the bulk of
             the card's content.
            </Card.Text>
            <Button variant="outline-primary"><Link to={`/PlanetsView/${planet.uid}`}>Learn more!</Link></Button>{' '}
            <Button variant="outline-warning" onClick={() => {
              actions.addFavorite(planet.name);
              console.log(store.favorites);}}><BsStar /></Button>{' '}
          </Card.Body>
          </Card>
        )
      })}
      </Row>
    </Container>
  )
}

export default PlanetsCard;