import React from 'react';
import './Menu.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Menu = ({ menu, addToCart }) => {

    const { name, price, image } = menu

    return (

        <div className='image-container m-3'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h2>${price}</h2>
            <button onClick={() => addToCart(menu)}
                className='btn btn-danger w-20'>Add to cart <small className='fs-5'><BsFillCartPlusFill></BsFillCartPlusFill></small>
            </button>
        </div>

    );
};

export default Menu;