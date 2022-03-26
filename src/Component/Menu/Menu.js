import React from 'react';
import './Menu.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Menu = ({ menu, addToCart }) => {

    const { name, price, image } = menu

    return (

        <div className='image-container m-3'>
            <img src={image} alt="" />
            <h4 className='p-2'>{name}</h4>
            <h4>${price}</h4>
            <button onClick={() => addToCart(menu)}
                className='btn btn-danger w-20'>Add to cart <small className='fs-5'><BsFillCartPlusFill></BsFillCartPlusFill></small>
            </button>
        </div>

    );
};

export default Menu;