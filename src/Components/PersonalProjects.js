import React from 'react';
import {
    Row,
    Card,
    ListGroup,
    ListGroupItem} from 'react-bootstrap';
// import './App.css';

const PersonalProjects = () => {
  return <div>
            <Row xs={1}  className="g-0">
              <Card className="cardSettings">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Giving Is Cool</Card.Title>
                  <Card.Text>
                    This is a e-commerce
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Row>
  </div>;
};

export default PersonalProjects;
