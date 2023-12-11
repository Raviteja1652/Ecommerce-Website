import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
    return(
        <>
            <Navbar bg="dark" expand='sm' variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/">Store</Navbar.Brand>
                    <Navbar.Brand href="/">About</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;