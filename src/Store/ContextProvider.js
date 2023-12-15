import React, { useState } from "react";
import cartContext from "./cart-context";

const ContextProvider = props => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const [products, setProducts] = useState([])
    // const userIsLoggedIn = !!token
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

    const addItemToCartHandler = (item) => {
        setProducts([...products, item])
        // console.log(products)
    };

    const updateItemsHandler = (index) => {
        setProducts((prev) => {
            const updatedItems = [...prev]
            updatedItems[index].quantity += 1
            return updatedItems
        })
    };
    const loginHandler = (token) => {
        localStorage.setItem('token', token)
        setToken(token)
        setUserIsLoggedIn(true)
    }

    const contextItems = {
        items: products,
        addToCart: addItemToCartHandler,
        updateItem: updateItemsHandler,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
    }

    return(
        <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
    )
};

export default ContextProvider;