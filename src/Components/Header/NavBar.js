import React, { useContext } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const ctx = useContext(cartContext)
    const tokenId = ctx.token
    const pos = !!tokenId
    const clickHandler = () => {
        props.cartOnClick(true)
    };
    let numberOfItemsInCart = 0;
    ctx.items.forEach(item => (
        numberOfItemsInCart += item.quantity
    ));

    return(
        <>
            <Navbar bg="dark" expand='lg' variant="dark" fixed="top">
                <Container>
                    {/* {pos && <Navbar.Brand as={Link} to="/movies">Movies</Navbar.Brand>} */}
                    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/">Store</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/about">About</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/contact">Contact Us</Navbar.Brand>
                    <Navbar.Brand as={Link} to="/login">Login</Navbar.Brand>
                    <Button variant="info" onClick={clickHandler}>cart
                        <span className="badge">{numberOfItemsInCart}</span>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;