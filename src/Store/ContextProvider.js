import React, { useState } from "react";
import cartContext from "./cart-context";

const ContextProvider = props => {
    const [products, setProducts] = useState([])

    const addItemToCartHandler = (item) => {
        setProducts([...products, item])
        // console.log(products)
    }

    const contextItems = {
        items: products,
        addToCart: addItemToCartHandler
    }

    return(
        <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
    )
};

export default ContextProvider;