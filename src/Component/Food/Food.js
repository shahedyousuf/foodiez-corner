import React from 'react';
import { useState, useEffect } from 'react'
import Menu from '../Menu/Menu';
import './Food.css'

const Food = () => {
    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    //event handler
    const addToCart = (menu) => {
        console.log(menu)
    }

    return (
        <div className='food-container mt-2'>
            <div className='food-menu'>

                {
                    menus.map(menu => <Menu key={menus.id} menu={menu} addToCart={addToCart}></Menu>)
                }

            </div>

            <div className="food-info">
                <h3>Food info</h3>
            </div>
        </div>
    );
};

export default Food;