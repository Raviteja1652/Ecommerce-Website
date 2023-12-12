import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
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
            <Navbar bg="dark" expand='sm' variant="dark">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/">Store</Navbar.Brand>
                    <Navbar.Brand href="/">About</Navbar.Brand>
                    <Button variant="info" onClick={clickHandler}>cart
                        <span className="badge">{numberOfItemsInCart}</span>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
};

export default NavBar;