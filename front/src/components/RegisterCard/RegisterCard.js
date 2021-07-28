import React from "react";
import { Col, Card } from "react-bootstrap";
import { Button } from "../Button/Button";
import "./styles.css";
const RegisterCard = () => (
  <div>
    <Col>
      <Card className="styledCard">
        <Card.Img variant="top" src="" className="image" />
        <Card.Body>
          <Card.Title className="title">
            <h6>Register Account!</h6>
          </Card.Title>
          <Card.Text className="text">
            For the purpose of industry regulation, your details are required.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </div>
);

export default RegisterCard;
