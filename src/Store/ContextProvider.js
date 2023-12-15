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
    
    const removeItemFromCartHandler = (id) => {
        setProducts((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.id === id) {
                    if(item.quantity > 1){
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null
                    }
                }
                return item;
            }).filter(Boolean);
            return updatedItems;
        });
    };

    const purchaseItemsHandler = () => {
        if (products.length > 0) {
            alert('Thank you for Shopping with us')
            setProducts([])
        } else {
            alert('Please add some Products in the Cart')
        }
        
    }

    const contextItems = {
        items: products,
        addToCart: addItemToCartHandler,
        updateItem: updateItemsHandler,
        removeItems: removeItemFromCartHandler,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        purchaseItems: purchaseItemsHandler
    }
    console.log(contextItems.isLoggedIn)

    return(
        <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
    )
};

export default ContextProvider;

