import { Button, Card, Col, Row } from "react-bootstrap";
import './ItemsList.css';
import { useContext } from "react";
import cartContext from "../../Store/cart-context";

const EachItem = (props) => {
    const ctx = useContext(cartContext)
    const quantity = ''
    const addToCartHandler = () => {
        ctx.addToCart({...props, quantity: 1})
    }
    return(
        <div className="eachItem">
            <h4>{props.title}</h4>
            <div>
                <img src={props.image} alt=''></img>
            </div>
            <div>
                <h3>{`$${props.price}`}</h3>
                <Button variant="primary" onClick={addToCartHandler}>Add to Cart</Button>
            </div>
        </div>
    );
};

export default EachItem;