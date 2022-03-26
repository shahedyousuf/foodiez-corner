import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    return (
        <div className='cart'>
            <h3>Cart info</h3>
            <div>
                {
                    cart.map(food => <h5 key={food.id}>{food.name}</h5>)

                }
            </div>

        </div>
    );
};

export default Cart;