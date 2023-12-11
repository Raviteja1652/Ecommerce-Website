import React from "react";
import Card from "../UI/Card";
import { Button } from "react-bootstrap";
import './Cart.css'

const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = () => {
    return(
        <div>
            <Card>
                <ul>
                    {cartElements.map((item => (
                        <li>
                            {item.title}
                            {item.price}
                            {item.quantity}
                            <Button variant="danger">Remove</Button>
                        </li>
                    )))}
                </ul>
            </Card>
        </div>
    )
};

export default Cart;