import React, { Component } from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
const About = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={6} className="h-100 my-auto">
        <h5>
          <span>ExpressIT</span>,<br />
          Innovative <br/>Solutions
          To <br/>Connect Deaf <br/>Dumbs 
          With<br /> The Universe!
        </h5>
      </Col>
      <Col lg={6}>
        <img src="Assets/svg/second-illustration.svg" width="100%" />
      </Col>
    </HeaderBox>
  </div>
);

export default About;
