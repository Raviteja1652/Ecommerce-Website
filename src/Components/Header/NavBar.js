import React, { useContext } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const ctx = useContext(cartContext)
    const isLoggedIn = ctx.isLoggedIn
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
                    {isLoggedIn && <Navbar.Brand as={Link} to="/movies">Movies</Navbar.Brand>}
                    <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                    {isLoggedIn && <Navbar.Brand as={Link} to="/store">Store</Navbar.Brand>}
                    <Navbar.Brand as={Link} to="/about">About</Navbar.Brand>
                    {isLoggedIn && <Navbar.Brand as={Link} to="/contact">Contact Us</Navbar.Brand>}
                    {!isLoggedIn && <Navbar.Brand as={Link} to="/login">Login</Navbar.Brand>}
                    {isLoggedIn && <Navbar.Brand as={Link} to="/logout" onClick={ctx.logout}>Logout</Navbar.Brand>}
                    {isLoggedIn && <Button variant="info" onClick={clickHandler}>cart
                        <span className="badge">{numberOfItemsInCart}</span>
                    </Button>}
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;