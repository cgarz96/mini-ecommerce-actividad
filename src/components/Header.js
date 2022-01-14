import React from "react";
import { Row,Col } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { getProductById } from '../app/services/productServices';

const style = {
    marginBottom: '30px'
  } 

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={style}>
            <Container>
                <Link to={'/'}>
                    <Navbar.Brand >
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    Mini Ecommerce
                    </Navbar.Brand>
                </Link>
                <ShoppingCart />
            </Container>
        </Navbar>
    )
}