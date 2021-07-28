import React from "react";
import { Col } from "react-bootstrap";
import HeaderBox from "../components/HeaderBox/HeaderBox";
const Product = () => (
  <div>
    <HeaderBox background="gradient">
      <Col lg={6}>
        <img src="Assets/svg/system.svg" width="50%" />
      </Col>
      <Col lg={6} className="h-100 my-auto">
        <h6>ExpressIT Kit™</h6>
      </Col>
    </HeaderBox>
  </div>
);

export default Product;
