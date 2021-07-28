import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
import data from "./data";
import "./styles.css";

const CardGrid = () => {
  return (
    <div className="container">
      <div>
        <h5 className="section-title">Our Services</h5>
        <hr className="hrline" />
        <p className="section-description">
          We provide the best solutions to connect the deaf dumbs with the
          society. We provide free, standard and entreprise plans that focused
          on our main goal and we insure you’ll all benefit from the following
          services
        </p>
        <br />
        <br />
      </div>
      <Row md={3} className="justify-content-md-center">
        {data.map((index) => (
          <Col>
            <Card className="styledCard">
              <Card.Img variant="top" src={index.icon} className="image" />
              <Card.Body>
                <Card.Title className="title">{index.title}</Card.Title>
                <Card.Text className="text">{index.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Button
        color={"transparent"}
        text={"#DA4459"}
        outline={"#DA4459"}
        fixedWidth={true}
        shadow={"none"}
      >
        Learn More
      </Button>
    </div>
  );
};

export default CardGrid;
