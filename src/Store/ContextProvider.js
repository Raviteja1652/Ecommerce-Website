import React, { useState } from "react";
import cartContext from "./cart-context";
import axios from "axios";

const ContextProvider = props => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const [cartItems, setCartItems] = useState([])
    const [products, setProducts] = useState(cartItems)
    // const userIsLoggedIn = !!token
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
    const [mail, setMail] = useState('')

    const addItemToCartHandler = (item) => {
        setProducts([...products, item])
        // console.log(products)
        axios.post(`https://crudcrud.com/api/eeebbc15f53f4861a8d4861b4e81dcb5/${mail}`, item).then(res => 
            console.log(res.data)
        ).catch(err => console.log(err))
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
    };
    const logoutHandler = () => {
        setUserIsLoggedIn(false);
        localStorage.removeItem('token')
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
    };
    const emailChangeHandler = (mailId) => {
        setMail(mailId)
    };
    const onPageLoad = () => {
        axios.get(`https://crudcrud.com/api/eeebbc15f53f4861a8d4861b4e81dcb5/${mail}`).then(res => {
            setCartItems(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
        console.log('res.data')
    }

    const contextItems = {
        items: products,
        addToCart: addItemToCartHandler,
        updateItem: updateItemsHandler,
        removeItems: removeItemFromCartHandler,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        purchaseItems: purchaseItemsHandler,
        changeMail: emailChangeHandler,
        onLoad: onPageLoad,
    }

    return(
        <cartContext.Provider value={contextItems}>{props.children}</cartContext.Provider>
    )
};

export default ContextProvider;

