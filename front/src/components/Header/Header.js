import React, { Component } from "react";
import { useState } from "react";
import {
  Container as BContainer,
  Row,
  Col,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import { SvgIcon } from "../../components/SvgIcon/SvgIcon";
import { Button } from "../../components/Button/Button";
import "./styles.css";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <Navbar className="mx-navbar" collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <Link to="/" className="LogoContainer" aria-label="homepage">
              <SvgIcon src="logo.svg" width="181px" height="104px" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="links">
            <Nav>
              <Nav.Link className="CustomNavLink" href="/About">
                  <Link className="Large" to="/About">
                    {"About"}
                  </Link>
              </Nav.Link>
              <Nav.Link className="CustomNavLink" href="/Mission">
                  <Link className="Large" to="/Mission">
                    {"Mission"}
                  </Link>
              </Nav.Link>
              <Nav.Link className="CustomNavLink" href="/Product">
                  <Link className="Large" to="/Product">
                    {"Product"}
                  </Link>
              </Nav.Link>

              <Nav.Link className="CustomNavLink" href="/Signup">
                  <Button shadow="none">
                    <Link className="SignupButton" to="/Signup">
                      {"Try for Free"}
                    </Link>
                  </Button>
              </Nav.Link>
              <Nav.Link className="CustomNavLink" href="/Product">
                  <Button color="none" shadow="none" >
                    <Link className="LoginButton" to="/Login">
                      {"Login"}
                    </Link>
                  </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };

  return (
    <div className="header">
      <BContainer fluid>
        <MenuItem />
      </BContainer>
    </div>
  );
};

export default Header;
