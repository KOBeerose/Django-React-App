import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ContentBlock from "../ContentBlock/ContentBlock";
import Header from "../Header/Header";

const HeaderBox = ({ children, background }) => {
  return (
    <div className={background === "gradient" ? `box ${background}` : "box"}>
      <div className="transparent-box">
        <Header />
      </div>

      <Container fluid>
        <ContentBlock>{children}</ContentBlock>
      </Container>
    </div>
  );
};

export default HeaderBox;
