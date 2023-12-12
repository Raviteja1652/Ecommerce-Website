import React, { useContext } from "react";
import Card from "../UI/Card";
import { Button } from "react-bootstrap";
import './Cart.css';
import Modal from "../UI/Modal";
import cartContext from "../../Store/cart-context";

const cartElements = [
    // {
    //     title: 'Colors',
    //     price: 100,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    //     quantity: 2,
    // },
    // {
    //     title: 'Black and white Colors',
    //     price: 50,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    //     quantity: 3,
    // },
    // {
    //     title: 'Yellow and Black Colors',
    //     price: 70,
    //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    //     quantity: 1,
    // }
    ]

const Cart = () => {
    const ctx = useContext(cartContext)
    const cartItems = (
        <ul className="cart">
            {ctx.items.map(item => (
                <li>{item.image}--{item.title}--{item.price}--{item.quantity}
                    <Button variant="danger">Remove</Button>
                </li>
            ))}
        </ul>
    )
    return(
        <div className="cart-container">
            <h2>Cart</h2>
            <div className="cart-header">
                <h4 className="cart-item cart-column">Item</h4>
                <h4 className="cart-price cart-column">Price</h4>
                <h4 className="cart-quantity cart-column">Quantity</h4>
            </div>
            {cartItems}
            <div>
                <span>Total Amount</span>
            </div>
        </div>
    )
};

export default Cart;