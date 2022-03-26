import React from 'react';
import './Menu.css'

const Menu = ({ menu, addToCart }) => {

    const { name, price, image } = menu

    return (

        <div className='image-container m-3'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h2>${price}</h2>
            <button onClick={() => addToCart(menu)} className='btn btn-danger'>Add to cart</button>
        </div>

    );
};

export default Menu;