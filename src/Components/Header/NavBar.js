import React, { useContext } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import cartContext from "../../Store/cart-context";
import './NavBar.css';

const NavBar = (props) => {
    const ctx = useContext(cartContext)
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
                    <Navbar.Brand href="/movies">Movies</Navbar.Brand>
                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                    <Navbar.Brand href="/">Store</Navbar.Brand>
                    <Navbar.Brand href="/about">About</Navbar.Brand>
                    <Button variant="info" onClick={clickHandler}>cart
                        <span className="badge">{numberOfItemsInCart}</span>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;