import React from 'react';
import { useState, useEffect } from 'react'
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import './Food.css'

const Food = () => {
    const [menus, setMenus] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])

    //event handler
    const addToCart = (menu) => {
        const newCart = [...cart, menu]
        setCart(newCart)
    }
    return (
        <div className='food-container mt-2'>
            <div className='food-menu'>
                {
                    menus.map(menu => <Menu key={menus.id} menu={menu} addToCart={addToCart}></Menu>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Food;