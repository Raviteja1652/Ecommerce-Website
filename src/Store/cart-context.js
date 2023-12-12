import React from "react";

const cartContext = React.createContext({
    items: [],
    add: () => {},
});

export default cartContext;