import React from 'react';
import { useState, useEffect } from 'react'
import Cart from '../Cart/Cart';
import Menu from '../Menu/Menu';
import './Food.css'
//modal
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const Food = () => {
    const [menus, setMenus] = useState([])
    const [cart, setCart] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

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
                    menus.map(menu => <Menu key={menu.id} menu={menu} addToCart={addToCart}></Menu>)
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
                <button className='btn btn-danger mb-2 p-2' onClick={openModal}>Choose 1 for me</button>
                <br />
                <button className='btn btn-danger' onClick={() => setCart([])}>Choose again</button>

            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {
                    cart.map(food => <h5 key={food.id}>{food.name}</h5>)

                }
            </Modal>
        </div>
    );
};

export default Food;