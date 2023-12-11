import React from "react";
import EachItem from "./EachItem";
import Card from "../UI/Card";
import './ItemsList.css'

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];

const ItemsList = () => {
    const listOfItems = productsArr.map(item => <EachItem 
        title={item.title}
        price={item.price}
        image={item.imageUrl}
    />)

    return(
        <section className="list">
            <div>
                <ul>
                    {listOfItems}
                </ul>
            </div>
        </section>
    )
};

export default ItemsList;