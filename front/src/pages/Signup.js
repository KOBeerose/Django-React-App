import React from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
import RegisterCard from "../components/RegisterCard/RegisterCard";
const Signup = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={5} className="h-100 my-auto">
        <RegisterCard />
      </Col>
      <Col></Col>
      <Col lg={5}>
        <img src="Assets/svg/chatexample.svg" width="80%" />
      </Col>
    </HeaderBox>
    <br />
  </div>
);

export default Signup;
