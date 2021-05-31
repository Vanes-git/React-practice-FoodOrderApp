import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const addItemToCartHadnler = item => {};
    
    const removeItemFromCartHadnler = item => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHadnler,
        removeItem: removeItemFromCartHadnler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;