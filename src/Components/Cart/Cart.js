import React, { useContext } from "react";
import Card from "../UI/Card";
import { Button } from "react-bootstrap";
import './Cart.css';
import Modal from "../UI/Modal";
import cartContext from "../../Store/cart-context";

const Cart = () => {
    const ctx = useContext(cartContext)
    const totalPrice = ctx.items.reduce((acc, item) => {
        return acc + item.price*item.quantity
    }, 0);

    const cartItems = (
        <ul className="cart">
            {ctx.items.map(item => (
                <li key={item.id}>
                    <div> <img src={item.image} className="cart-image" /> </div> 
                    <h5 className="title-list">{item.title}</h5> 
                    <h4 className="price-list"> {`$${(item.price)*(item.quantity)}`} </h4> 
                    <div className="quantity-list"> {item.quantity} </div>
                    <Button variant="danger" onClick={() => ctx.removeItems(item.id)}>Remove</Button>
                </li>
            ))}
        </ul>
    )
    return(
        <div className="cart-container">
            <h2 className="cart-name">Cart</h2>
            <div className="cart-header">
                <h4 className="item-header">Item</h4>
                <h4 className="price-header">Price</h4>
                <h4 className="quantity-header">Quantity</h4>
            </div>
            {cartItems}
            <div>
                <span className="totalAmount">Total Amount: ${totalPrice}</span>
            </div>
            <footer>
                <Button variant="info" className="purchase-button" onClick={() => ctx.purchaseItems()}>Purchase</Button>
            </footer>
        </div>
    )
};

export default Cart;