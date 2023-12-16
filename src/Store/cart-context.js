import React from "react";

const cartContext = React.createContext({
    items: [],
    add: () => {},
    token: '',
    isLoggedIn: false,
});

export default cartContext;