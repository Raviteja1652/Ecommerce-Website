import React from "react";
import './Home.css';
import { Button } from "react-bootstrap";

const listArr = [
    {   date: 'july 16', 
        place: 'DETROIT, MI',
        specPlace: 'DTE ENERGY MUSIC THEATER',
    },
    {   date: 'july 19', 
        place: 'PHEONIX, AZ',
        specPlace: 'AK CHIN PAVILION',
    },
    {   date: 'july 22', 
        place: 'LAS VEGAS, NV',
        specPlace: 'T-MOBILE ARENA',
    },
]

const Home = () => {
    const lists = listArr.map(list => (
        <li className="tour-item"><div>{list.date}</div> 
            <div>{list.place}</div>
            <div>{list.specPlace}</div>
            <Button variant="info" className="button">Get Tickets</Button>
        </li>
    ))
    return(
        <div>
            <header className="header">
                <h1 >The Generics</h1>
                <Button variant="outline-info">Get Our Latest Album</Button>
            </header>
            <ul className="tours">
                    {lists}
            </ul>
            
        </div>
    )
};

export default Home; 