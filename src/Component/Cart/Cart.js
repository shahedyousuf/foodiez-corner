import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Cart info</h3>
            <p>Items: {cart.length}</p>
        </div>
    );
};

export default Cart;