import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";

const NavBar = (props) => {
    const clickHandler = () => {
        props.cartOnClick(true)
    }
    return(
        <>
            <Navbar bg="dark" expand='sm' variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/">Store</Navbar.Brand>
                    <Navbar.Brand href="/">About</Navbar.Brand>
                    <Button variant="info" onClick={clickHandler}>Cart</Button>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;