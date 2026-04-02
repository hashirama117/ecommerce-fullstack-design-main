import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="Profile Picture"
            />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Email: john.doe@example.com</Card.Text>
              <Card.Text>Location: New York, USA</Card.Text>
              <Button variant="primary" className="w-100">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5>Dashboard</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>Orders</Card.Title>
                      <Card.Text>You have 5 pending orders.</Card.Text>
                      <Button variant="info">View Orders</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="mb-3">
                    <Card.Body>
                      <Card.Title>Messages</Card.Title>
                      <Card.Text>You have 3 new messages.</Card.Text>
                      <Button variant="info">View Messages</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Card>
                    <Card.Header>
                      <h6>Recent Activities</h6>
                    </Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        Order #1234 placed on 10/10/2023
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Profile updated on 09/10/2023
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Message sent to support on 08/10/2023
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
