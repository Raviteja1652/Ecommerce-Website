import React from "react";
import EachItem from "./EachItem";
import './ItemsList.css'

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        id: 'm1'
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        id: 'm2'
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        id: 'm3'
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        id: 'm4'
    }
];

const ItemsList = () => {
    const listOfItems = productsArr.map(item => <EachItem 
        title={item.title}
        price={item.price}
        image={item.imageUrl}
        id={item.id}
    />)

    return(
        <>
            <header className="items-header"><h1>The Generics</h1></header>
            <h1 className="music">MUSIC</h1>
            <div className="list">{listOfItems}</div>  
        </> 
    )
};

export default ItemsList; 