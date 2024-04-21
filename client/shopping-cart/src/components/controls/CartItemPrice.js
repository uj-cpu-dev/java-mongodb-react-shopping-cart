import React from 'react'

const CartItemPrice = ( { price }) => {
    return (
        <div className={'cart-price'}>
            <p>{`$ ${price}`}</p>
        </div>
    )
}

export default CartItemPrice;