import { Button, Card, Col, Row } from "react-bootstrap";
import './ItemsList.css';
import { useContext } from "react";
import cartContext from "../../Store/cart-context";
import { Link } from 'react-router-dom'

const EachItem = (props) => {
    const ctx = useContext(cartContext)
    const isLoggedIn = ctx.isLoggedIn
    // console.log('working')
    // console.log(isLoggedIn)
    const quantity = ''
    const addToCartHandler = () => {
        const existingProductIndex = ctx.items.findIndex(item => item.id === props.id)
        if(existingProductIndex >= 0){
            ctx.updateItem(existingProductIndex)
        } else {
            ctx.addToCart({...props, quantity: 1})
        }
    };
    
    return(
        <div className="eachItem">
            <h4 className="title">{props.title}</h4>
            <div>
                <Link to={`/products/${props.title}`}>
                    <img src={props.image} alt=''></img>
                </Link>
            </div>
            <div>
                <h3>{`$${props.price}`}</h3>
                <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
            </div>
        </div>
    );
};

export default EachItem;