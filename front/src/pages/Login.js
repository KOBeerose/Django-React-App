import React from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
const Login = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={6} className="h-100 my-auto">
        <h6>Login</h6>
      </Col>
      <Col lg={6}>
        <img src="Assets/svg/third-illustration.svg" width="50%" />
      </Col>
    </HeaderBox>
  </div>
);

export default Login;
