import React from 'react'

const CartItemSize = ( { size }) => {
    return (
        <div className={'cart-size-content'}>
            <p>{size}</p>
        </div>
    )
}

export default CartItemSize;