import React from 'react';
import './Menu.css'

const Menu = ({ menu }) => {
    console.log(menu)
    const { name, price, image } = menu
    return (

        <div className='image-container'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h2>${price}</h2>
            <button>Add to cart</button>
        </div>

    );
};

export default Menu;