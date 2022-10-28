import React from 'react'
import CartContex from './cart-context'

const addItemToCartHandler = (item) => { }

const removeItemFromCartHandler = (id) => { }

const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
}

const CardProvider = (props) => {
    return (
        <CartContex.Provider value={cartContext}>
            {props.children}
        </CartContex.Provider>
    )
}

export default CardProvider