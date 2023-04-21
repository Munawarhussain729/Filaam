import { Card } from "@mui/material";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="signupCard">
        <h3>Signup</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Container fluid>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="Number" placeholder="Enter Your age" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter you country" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="moveToCenter">
            <Button type="submit" className="submitButton">
              Signup
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
