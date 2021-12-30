import React from "react";
import { Row,Col } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import logo from '../logo.svg'

const style = {
    marginBottom: '30px'
  } 

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={style}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Mini Ecommerce
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}